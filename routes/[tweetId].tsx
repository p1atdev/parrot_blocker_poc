/** @jsx h */
import { h } from "preact"
import { Handlers, PageProps } from "$fresh/server.ts"
import { Searcher } from "../utils/whisper.ts"
import { tw } from "@twind"
import { TwitterAPI, RequestQuery } from "whisper/mod.ts"
import { useEffect, useState } from "preact/hooks"

interface Tweet {
    text: string
    userRestId: string
}

interface User {
    name: string
    screenName: string
    profileImageUrl: string
    tweet: Tweet
}

interface Result {
    tweetId: string
    replies: Tweet[]
    quotes: Tweet[]
    sus: User[]
}

export const handler: Handlers<Result | null> = {
    async GET(_, ctx) {
        const { tweetId } = ctx.params

        const result = await searchTweets(tweetId)

        return ctx.render(result)
    },
}

export default function Search({ data }: PageProps<Result | null>) {
    const tweetId = data?.tweetId

    if (!data) {
        return <div>Failed</div>
    }

    return (
        <div className={tw`py-6 px-8`}>
            <div class={tw`pb-10`}>
                <a href={"/"} class={tw`py-3`}>
                    ←戻る
                </a>
            </div>

            <p> 元ツイートID: {tweetId} </p>

            {data.sus.length === 0 ? (
                <div className={tw``}>
                    <p className={tw`text-3xl font-bold py-4`}>Perfect! ✅</p>
                    <p>コピペスパムはいませんでした！</p>
                </div>
            ) : (
                <div>
                    <p className={tw`text-3xl font-bold py-4`}>Parrots 🦜</p>
                    <p className={tw`text-xl py-4`}>コピペスパムが見つかりました</p>
                    {data.sus.map((sus) => (
                        <div className={tw`hover:bg-slate-300 hover:shadow-lg p-4`}>
                            <a className={tw`py-6`} href={`https://twitter.com/${sus.screenName}`} target={"__blank"}>
                                <div className={tw`flex text-lg gap-x-2`}>
                                    <img src={sus.profileImageUrl} className={tw`w-10 h-10 rounded-full`} />
                                    <div>
                                        <div class={tw`flex gap-x-1`}>
                                            <p className={tw`font-semibold`}>{sus.name}</p>
                                            <p className={tw`opacity-50 `}>@{sus.screenName}</p>
                                        </div>
                                        <p className={tw`py-1`}>{sus.tweet.text}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const searchTweets = async (tweetId: string): Promise<Result> => {
    const searcher = new Searcher(tweetId)

    const [replies, quotes] = await Promise.all([searcher.searchReply(), searcher.searchQuote()])

    const susTweets = replies.filter((r) => quotes.map((q) => q.text).includes(r.text))

    const result: Result = {
        tweetId: tweetId,
        replies,
        quotes,
        sus: await Promise.all(susTweets.map((tweet) => searchUser(tweet))),
    }

    return result
}

const searchUser = async (tweet: Tweet): Promise<User> => {
    const restId = tweet.userRestId
    const client = new TwitterAPI()

    const query = new RequestQuery({
        variables: {
            userId: restId,
            withSafetyModeUserFields: true,
            withSuperFollowsUserFields: true,
        },
    })

    const user = await client.request({
        method: "GET",
        urlType: "gql",
        path: "UserByRestId",
        query: query,
    })

    const json = await user.json()

    return {
        name: json.data.user.result.legacy.name,
        screenName: json.data.user.result.legacy.screen_name,
        profileImageUrl: json.data.user.result.legacy.profile_image_url_https,
        tweet: tweet,
    }
}
