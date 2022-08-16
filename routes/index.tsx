/** @jsx h */
import { h } from "preact"
import { tw } from "@twind"
import { Handlers, PageProps } from "$fresh/server.ts"

export const handler: Handlers = {
    async POST(req, ctx) {
        // フォームデータの入力値を取得
        const formData = await req.formData()
        const tweetUrl = formData.get("tweetUrl")?.toString()

        if (tweetUrl === undefined) {
            return new Response("", {
                status: 303,
                headers: {
                    Location: "/",
                },
            })
        }

        const url = new URL(tweetUrl)
        const path = url.pathname
        const tweetId = path.split("/").pop()

        return new Response("", {
            status: 303,
            headers: {
                Location: `/${tweetId}`,
            },
        })
    },
}

export default function Home() {
    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <div class={tw`py-20`}>
                <p class={tw`text-4xl font-bold text-center`}>Parrot Blocker 🦜🚫</p>
            </div>
            <div class={tw`mx-auto text-center `}>
                <form method={"POST"}>
                    <input
                        type="text"
                        name="tweetUrl"
                        class={tw`text-center border border-2 border-green-400 rounded-sm py-2 px-2 mx-2`}
                        required
                    />
                    <button type="submit" class={tw`p-2 mx-2 bg-green-400 text-white font-bold rounded-sm`}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}
