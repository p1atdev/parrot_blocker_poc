import { Bearer, RequestQuery, TwitterAPI } from "whisper/mod.ts";

import { TweetDetailRes } from "../types/reply.ts";
import { QuoteSearchRes } from "../types/quote.ts";

export class Searcher {
  client = new TwitterAPI(Bearer.Web);
  tweetId: string;
  constructor(tweetId: string) {
    this.tweetId = tweetId;
  }

  async searchReply(): Promise<Tweet[]> {
    const replies = await this.getAllReplies("");

    return replies;
  }

  private async getAllReplies(
    _cursor: string,
  ): Promise<Tweet[]> {
    const tweetDetailQuery = {
      variables: {
        "focalTweetId": this.tweetId,
        "cursor": _cursor,
        "referrer": "tweet",
        "with_rux_injections": false,
        "includePromotedContent": true,
        "withCommunity": true,
        "withQuickPromoteEligibilityTweetFields": true,
        "withBirdwatchNotes": false,
        "withSuperFollowsUserFields": false,
        "withDownvotePerspective": false,
        "withReactionsMetadata": false,
        "withReactionsPerspective": false,
        "withSuperFollowsTweetFields": false,
        "withVoice": true,
        "withV2Timeline": true,
      },
      features: {
        "dont_mention_me_view_api_enabled": true,
        "interactive_text_enabled": true,
        "responsive_web_uc_gql_enabled": true,
        "vibe_api_enabled": true,
        "responsive_web_edit_tweet_api_enabled": true,
        "standardized_nudges_misinfo": true,
        "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":
          false,
        "responsive_web_enhance_cards_enabled": false,
      },
    };

    const query = new RequestQuery(tweetDetailQuery);

    const res = await this.client.request({
      method: "GET",
      urlType: "gql",
      path: "TweetDetail",
      query: query,
    });

    const json: TweetDetailRes = await res.json();

    const instructions =
      json.data.threaded_conversation_with_injections_v2.instructions;

    const timelineEntries = instructions.find((i) =>
      i.type === "TimelineAddEntries" || i.type === "TimelineAddToModule"
    );

    if (timelineEntries === undefined) {
      return [];
    }

    if (timelineEntries.type !== "TimelineAddEntries") {
      return [];
    }

    const items = timelineEntries.entries?.filter((e) =>
      e.content.items !== undefined
    ).flatMap((e) => e.content.items);

    const replies = items?.filter((e) =>
      e?.item.itemContent?.itemType === "TimelineTweet"
    )?.map((e) => e?.item.itemContent?.tweet_results?.result.legacy);

    const cursorEntry = timelineEntries.entries?.find((e) =>
      e.entryId.startsWith("cursor-")
    );

    const cursor = cursorEntry?.content.itemContent?.value;

    const tweets: Tweet[] = replies
      ? replies.map((r) => {
        return {
          text: r?.full_text.replace(`@${r.in_reply_to_screen_name} `, "") ??
            "NONE",
          userRestId: r?.user_id_str ?? "NONE",
        };
      })
      : [];

    if (cursor === undefined) {
      return tweets;
    }

    const all = await this.getAllReplies(cursor);

    return tweets.concat(all);
  }

  async searchQuote() {
    const quotes = await this.getAllQuotes("");

    return quotes;
  }

  private async getAllQuotes(
    _cursor: string,
  ): Promise<Tweet[]> {
    const quoteSearchQuery = {
      q: `url:${this.tweetId}`,
      //   vertical: "tweet_detail_quote",
      cursor: _cursor,
      query_source: "typed_query",
      count: 20, // At most, it's only about 500.
      ext:
        "mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo,editControl,collab_control,vibe",

      include_profile_interstitial_type: 1,
      include_blocking: 1,
      include_blocked_by: 1,
      include_followed_by: 1,
      include_want_retweets: 1,
      include_mute_edge: 1,
      include_can_dm: 1,
      include_can_media_tag: 1,
      include_ext_has_nft_avatar: 1,
      skip_status: 1,
      cards_platform: "Web-12",
      include_cards: 1,
      include_ext_alt_text: true,
      include_quote_count: true,
      include_reply_count: 1,
      tweet_mode: "extended",
      include_ext_collab_control: true,
      include_entities: true,
      include_user_entities: true,
      include_ext_media_color: true,
      include_ext_media_availability: true,
      include_ext_sensitive_media_warning: true,
      include_ext_trusted_friends_metadata: true,
      send_error_codes: true,
      simple_quoted_tweet: true,

      pc: 1,
      spelling_corrections: 1,
      include_ext_edit_control: true,
    };

    const query = new RequestQuery(quoteSearchQuery);

    const res = await this.client.request({
      method: "GET",
      urlType: "i/api/2",
      path: "/search/adaptive.json",
      query: query,
    });

    const json: QuoteSearchRes = await res.json();

    const tweets: Tweet[] = Object.entries(json.globalObjects.tweets).filter((
      [id, _tweet],
    ) => id !== this.tweetId).map(
      ([_id, tweet]) => {
        return {
          text: tweet.full_text ?? tweet.text ?? "",
          userRestId: tweet.user_id_str,
        };
      },
    ).filter((tweet) => tweet.text !== "");

    if (tweets.length === 0) {
      return [];
    }

    const lastEntry = json.timeline.instructions.find((i) =>
      i.replaceEntries !== undefined
    );

    if (lastEntry !== undefined) {
      return [];
    }

    const entry = json.timeline.instructions.find((i) =>
      i.addEntries !== undefined
    );

    if (entry === undefined) {
      return [];
    }

    const cursor = entry.addEntries!.entries.find((e) => {
      return e.entryId === "sq-cursor-bottom";
    })?.content.operation?.cursor.value;

    if (cursor === undefined) {
      return [];
    }

    const all = await this.getAllQuotes(cursor);

    return all.concat(tweets);
  }
}

interface Tweet {
  text: string;
  userRestId: string;
}

// interface ReplyTweet extends Tweet {}

// interface QuoteTweet extends Tweet {}
