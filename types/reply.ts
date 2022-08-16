export interface TweetDetailRes {
  data: Data;
}

export interface Data {
  threaded_conversation_with_injections_v2:
    ThreadedConversationWithInjectionsV2;
}

export interface ThreadedConversationWithInjectionsV2 {
  instructions: Instruction[];
  responseObjects: ResponseObjects;
}

export interface Instruction {
  type: string;
  entries?: Entry[];
  direction?: string;
}

export interface Entry {
  entryId: string;
  sortIndex: string;
  content: EntryContent;
}

export interface EntryContent {
  entryType: string;
  __typename: string;
  itemContent?: ContentItemContent;
  items?: ItemElement[];
  displayType?: string;
  clientEventInfo?: ContentClientEventInfo;
  header?: Header;
}

export interface ContentClientEventInfo {
  details: PurpleDetails;
  component?: Component;
}

export enum Component {
  LoginInlinePrompt = "login_inline_prompt",
  YouMightAlsoLike = "you_might_also_like",
}

export interface PurpleDetails {
  conversationDetails?: ConversationDetails;
  timelinesDetails?: PurpleTimelinesDetails;
}

export interface ConversationDetails {
  conversationSection: string;
}

export interface PurpleTimelinesDetails {
  injectionType: Component;
  sourceData: string;
}

export interface Header {
  displayType: string;
  text: string;
  sticky: boolean;
}

export interface ContentItemContent {
  itemType: Typename;
  __typename: Typename;
  tweet_results?: PurpleTweetResults;
  tweetDisplayType?: TweetDisplayType;
  hasModeratedReplies?: boolean;
  value?: string;
  cursorType?: string;
  displayTreatment?: DisplayTreatment;
}

export enum Typename {
  TimelineMessagePrompt = "TimelineMessagePrompt",
  TimelineTimelineCursor = "TimelineTimelineCursor",
  TimelineTweet = "TimelineTweet",
}

export interface DisplayTreatment {
  actionText: string;
}

export enum TweetDisplayType {
  Tweet = "Tweet",
  TweetTombstone = "TweetTombstone",
}

export interface PurpleTweetResults {
  result: PurpleResult;
}

export interface PurpleResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: PurpleCore;
  card: PurpleCard;
  unmention_info: UnmentionInfo;
  unified_card: UnifiedCard;
  edit_control: EditControl;
  legacy: TentacledLegacy;
  quick_promote_eligibility: QuickPromoteEligibility;
}

export interface PurpleCard {
  rest_id: string;
  legacy: PurpleLegacy;
}

export interface PurpleLegacy {
  binding_values: PurpleBindingValue[];
  card_platform: CardPlatform;
  name: string;
  url: string;
  user_refs_results: unknown[];
}

export interface PurpleBindingValue {
  key: string;
  value: PurpleValue;
}

export interface PurpleValue {
  image_value?: ImageValue;
  type: ValueType;
  string_value?: string;
  scribe_key?: string;
  image_color_value?: ImageColorValue;
}

export interface ImageColorValue {
  palette: Palette[];
}

export interface Palette {
  percentage: number;
  rgb: RGB;
}

export interface RGB {
  blue: number;
  green: number;
  red: number;
}

export interface ImageValue {
  height: number;
  width: number;
  url: string;
}

export enum ValueType {
  Image = "IMAGE",
  ImageColor = "IMAGE_COLOR",
  String = "STRING",
}

export interface CardPlatform {
  platform: Platform;
}

export interface Platform {
  audience: Audience;
  device: Device;
}

export interface Audience {
  name: string;
}

export interface Device {
  name: string;
  version: string;
}

export interface PurpleCore {
  user_results: PurpleUserResults;
}

export interface PurpleUserResults {
  result: FluffyResult;
}

export interface FluffyResult {
  __typename: ResultTypename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: UnmentionInfo;
  has_nft_avatar: boolean;
  legacy: FluffyLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export enum ResultTypename {
  User = "User",
}

export interface UnmentionInfo {
}

export interface FluffyLegacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: PurpleEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_banner_extensions: ProfileExtensions;
  profile_banner_url: string;
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: TranslatorType;
  verified: boolean;
  withheld_in_countries: unknown[];
}

export interface PurpleEntities {
  description: Description;
}

export interface Description {
  urls: URLElement[];
}

export interface URLElement {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface ProfileExtensions {
  mediaColor: ProfileImageExtensionsMediaColor;
}

export interface ProfileImageExtensionsMediaColor {
  r: R;
}

export interface R {
  ok?: ImageColorValue;
}

export enum TranslatorType {
  None = "none",
  Regular = "regular",
}

export interface EditControl {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  is_edit_eligible: boolean;
  edits_remaining: string;
}

export interface TentacledLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: FluffyEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  possibly_sensitive: boolean;
  possibly_sensitive_editable: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
}

export interface FluffyEntities {
  user_mentions: UserMention[];
  urls: URLElement[];
  hashtags: Hashtag[];
  symbols: unknown[];
  media?: EntitiesMedia[];
}

export interface Hashtag {
  indices: number[];
  text: string;
}

export interface EntitiesMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: MediaType;
  url: string;
  features: Features;
  sizes: Sizes;
  original_info: PurpleOriginalInfo;
}

export interface Features {
  large?: OrigClass;
  medium?: OrigClass;
  small?: OrigClass;
  orig?: OrigClass;
}

export interface OrigClass {
  faces: FocusRect[];
}

export interface FocusRect {
  x: number;
  y: number;
  h: number;
  w: number;
}

export interface PurpleOriginalInfo {
  height: number;
  width: number;
  focus_rects?: FocusRect[];
}

export interface Sizes {
  large: ThumbClass;
  medium: ThumbClass;
  small: ThumbClass;
  thumb: ThumbClass;
}

export interface ThumbClass {
  h: number;
  w: number;
  resize: Resize;
}

export enum Resize {
  Crop = "crop",
  Fit = "fit",
}

export enum MediaType {
  Photo = "photo",
  Video = "video",
}

export interface UserMention {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface QuickPromoteEligibility {
  eligibility: Eligibility;
}

export enum Eligibility {
  IneligibleUserUnauthorized = "IneligibleUserUnauthorized",
}

export interface UnifiedCard {
  card_fetch_state: string;
  experiment_signals: UnmentionInfo;
}

export interface ItemElement {
  entryId: string;
  item: ItemItem;
}

export interface ItemItem {
  itemContent: ItemItemContent;
  clientEventInfo: ItemClientEventInfo;
}

export interface ItemClientEventInfo {
  details?: FluffyDetails;
  component?: Component;
  element?: Element;
}

export interface FluffyDetails {
  conversationDetails?: ConversationDetails;
  timelinesDetails?: FluffyTimelinesDetails;
}

export interface FluffyTimelinesDetails {
  controllerData?: string;
  injectionType?: Component;
  sourceData?: string;
}

export enum Element {
  Tweet = "tweet",
}

export interface ItemItemContent {
  itemType: Typename;
  __typename: Typename;
  tweet_results?: FluffyTweetResults;
  tweetDisplayType?: TweetDisplayType;
  value?: string;
  cursorType?: string;
  displayTreatment?: DisplayTreatment;
  content?: ItemContentContent;
}

export interface ItemContentContent {
  contentType: string;
  headerText: string;
  bodyText: string;
  primaryButtonAction: AryButtonAction;
  secondaryButtonAction: AryButtonAction;
  headerRichText: Text;
  bodyRichText: Text;
}

export interface Text {
  rtl: boolean;
  text: string;
  entities: BodyRichTextEntity[];
}

export interface BodyRichTextEntity {
  fromIndex: number;
  toIndex: number;
  ref: PurpleRef;
}

export interface PurpleRef {
  type: string;
  url: string;
  urlType: string;
}

export interface AryButtonAction {
  text: string;
  action: Action;
}

export interface Action {
  url: string;
  dismissOnClick: boolean;
  clientEventInfo: ActionClientEventInfo;
}

export interface ActionClientEventInfo {
  component: Component;
}

export interface FluffyTweetResults {
  result: TentacledResult;
}

export interface TentacledResult {
  __typename: TweetDisplayType;
  tombstone?: Tombstone;
  rest_id?: string;
  core?: FluffyCore;
  unmention_info?: UnmentionInfo;
  edit_control?: EditControl;
  legacy?: HilariousLegacy;
  quick_promote_eligibility?: QuickPromoteEligibility;
  card?: FluffyCard;
  unified_card?: UnifiedCard;
  quoted_status_result?: QuotedStatusResult;
}

export interface FluffyCard {
  rest_id: string;
  legacy: StickyLegacy;
}

export interface StickyLegacy {
  binding_values: FluffyBindingValue[];
  card_platform: CardPlatform;
  name: string;
  url: string;
  user_refs_results: UserRefsResult[];
}

export interface FluffyBindingValue {
  key: string;
  value: FluffyValue;
}

export interface FluffyValue {
  string_value?: string;
  type: string;
  user_value?: UserValue;
  scribe_key?: string;
}

export interface UserValue {
  id_str: string;
  path: unknown[];
}

export interface UserRefsResult {
  result: UserRefsResultResult;
}

export interface UserRefsResultResult {
  __typename: ResultTypename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: UnmentionInfo;
  has_nft_avatar: boolean;
  legacy: IndigoLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface IndigoLegacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: TentacledEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: unknown[];
  possibly_sensitive: boolean;
  profile_banner_extensions: ProfileBannerExtensions;
  profile_banner_url: string;
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: TranslatorType;
  url: string;
  verified: boolean;
  withheld_in_countries: unknown[];
}

export interface TentacledEntities {
  description: Description;
  url?: Description;
}

export interface ProfileBannerExtensions {
  mediaColor: PurpleMediaColor;
}

export interface PurpleMediaColor {
  r: UnmentionInfo;
}

export interface FluffyCore {
  user_results: FluffyUserResults;
}

export interface FluffyUserResults {
  result: StickyResult;
}

export interface StickyResult {
  __typename: ResultTypename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  legacy: IndecentLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
  professional?: Professional;
}

export interface AffiliatesHighlightedLabel {
  label?: Label;
}

export interface Label {
  badge: Badge;
  description: string;
  longDescription?: LongDescription;
  userLabelType?: string;
  url?: LabelURL;
}

export interface Badge {
  url: string;
}

export interface LongDescription {
  text: string;
  entities: LongDescriptionEntity[];
}

export interface LongDescriptionEntity {
  fromIndex: number;
  toIndex: number;
  ref: FluffyRef;
}

export interface FluffyRef {
  type: string;
  screen_name: string;
  mention_results: MentionResults;
}

export interface MentionResults {
  result: MentionResultsResult;
}

export interface MentionResultsResult {
  __typename: ResultTypename;
  legacy: ConversationOwnerLegacy;
  rest_id: string;
}

export interface ConversationOwnerLegacy {
  screen_name: string;
}

export interface LabelURL {
  urlType: string;
  url: string;
}

export interface IndecentLegacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: TentacledEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: TranslatorType;
  verified: boolean;
  withheld_in_countries: unknown[];
  profile_banner_extensions?: ProfileExtensions;
  profile_banner_url?: string;
  url?: string;
}

export interface Professional {
  rest_id: string;
  professional_type: string;
  category: Category[];
}

export interface Category {
  id: number;
  name: string;
  icon_name: string;
}

export interface HilariousLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: FluffyEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  extended_entities?: PurpleExtendedEntities;
  quoted_status_id_str?: string;
  quoted_status_permalink?: QuotedStatusPermalink;
  self_thread?: SelfThread;
  conversation_control?: ConversationControl;
}

export interface ConversationControl {
  policy: string;
  conversation_owner: ConversationOwner;
}

export interface ConversationOwner {
  legacy: ConversationOwnerLegacy;
}

export interface PurpleExtendedEntities {
  media: PurpleMedia[];
}

export interface PurpleMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: MediaType;
  url: string;
  additional_media_info?: AdditionalMediaInfo;
  ext_media_color: ImageColorValue;
  mediaStats?: MediaStats;
  ext_media_availability: EXTMediaAvailability;
  features: Features;
  sizes: Sizes;
  original_info: PurpleOriginalInfo;
  video_info?: VideoInfo;
  ext_alt_text?: string;
}

export interface AdditionalMediaInfo {
  monetizable: boolean;
}

export interface EXTMediaAvailability {
  status: Status;
}

export enum Status {
  Available = "Available",
}

export interface MediaStats {
  viewCount: number;
}

export interface VideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

export interface Variant {
  content_type: ContentType;
  url: string;
  bitrate?: number;
}

export enum ContentType {
  ApplicationXMPEGURL = "application/x-mpegURL",
  VideoMp4 = "video/mp4",
}

export interface QuotedStatusPermalink {
  url: string;
  expanded: string;
  display: string;
}

export interface SelfThread {
  id_str: string;
}

export interface QuotedStatusResult {
  result: QuotedStatusResultResult;
}

export interface QuotedStatusResultResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: TentacledCore;
  unmention_info: UnmentionInfo;
  edit_control: EditControl;
  legacy: AmbitiousLegacy;
}

export interface TentacledCore {
  user_results: TentacledUserResults;
}

export interface TentacledUserResults {
  result: IndigoResult;
}

export interface IndigoResult {
  __typename: ResultTypename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: UnmentionInfo;
  has_nft_avatar: boolean;
  legacy: IndecentLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface AmbitiousLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: FluffyEntities;
  extended_entities: FluffyExtendedEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  possibly_sensitive: boolean;
  possibly_sensitive_editable: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
}

export interface FluffyExtendedEntities {
  media: FluffyMedia[];
}

export interface FluffyMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: MediaType;
  url: string;
  additional_media_info: AdditionalMediaInfo;
  ext_media_color: ImageColorValue;
  mediaStats: MediaStats;
  ext_media_availability: EXTMediaAvailability;
  features: UnmentionInfo;
  sizes: Sizes;
  original_info: FluffyOriginalInfo;
  video_info: VideoInfo;
}

export interface FluffyOriginalInfo {
  height: number;
  width: number;
}

export interface Tombstone {
  __typename: string;
  text: Text;
}

export interface ResponseObjects {
  immediateReactions: unknown[];
}
