export interface QuoteSearchRes {
  globalObjects: GlobalObjects;
  timeline: Timeline;
}

export interface GlobalObjects {
  tweets: { [key: string]: TweetValue };
  users: { [key: string]: User };
  moments: Broadcasts;
  cards: Broadcasts;
  places: Broadcasts;
  media: Broadcasts;
  broadcasts: Broadcasts;
  topics: Broadcasts;
  lists: Broadcasts;
}

export interface Broadcasts {
}

export interface TweetValue {
  created_at: string;
  id: number;
  id_str: string;
  full_text?: string;
  text?: string;
  truncated: boolean;
  display_text_range: number[];
  entities: TweetEntities;
  source: string;
  in_reply_to_status_id: null;
  in_reply_to_status_id_str: null;
  in_reply_to_user_id: null;
  in_reply_to_user_id_str: null;
  in_reply_to_screen_name: null;
  user_id: number;
  user_id_str: string;
  geo: null;
  coordinates: null;
  place: null;
  contributors: null;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  reply_count: number;
  quote_count: number;
  conversation_id: number;
  conversation_id_str: string;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  possibly_sensitive_editable: boolean;
  card?: Card;
  lang: string;
  supplemental_language: null;
  ext_edit_control: EXTEditControl;
  ext: TweetEXT;
  quoted_status_id?: number;
  quoted_status_id_str?: string;
  quoted_status_permalink?: QuotedStatusPermalink;
}

export interface Card {
  name: string;
  url: string;
  card_type_url: string;
  binding_values: BindingValues;
  card_platform: CardPlatform;
}

export interface BindingValues {
  vanity_url: URL;
  domain: DomainClass;
  title: DomainClass;
  summary_photo_image_alt_text: DomainClass;
  photo_image_full_size_alt_text: DomainClass;
  description: DomainClass;
  thumbnail_image_small: PhotoImageFullSize;
  thumbnail_image: PhotoImageFullSize;
  thumbnail_image_large: PhotoImageFullSize;
  thumbnail_image_x_large: PhotoImageFullSize;
  thumbnail_image_color: EColor;
  thumbnail_image_original: PhotoImageFullSize;
  summary_photo_image_small: PhotoImageFullSize;
  summary_photo_image: PhotoImageFullSize;
  summary_photo_image_large: PhotoImageFullSize;
  summary_photo_image_x_large: PhotoImageFullSize;
  summary_photo_image_color: EColor;
  summary_photo_image_original: PhotoImageFullSize;
  photo_image_full_size_small: PhotoImageFullSize;
  photo_image_full_size: PhotoImageFullSize;
  photo_image_full_size_large: PhotoImageFullSize;
  photo_image_full_size_x_large: PhotoImageFullSize;
  photo_image_full_size_color: EColor;
  photo_image_full_size_original: PhotoImageFullSize;
  card_url: URL;
}

export interface URL {
  type: string;
  string_value: string;
  scribe_key: string;
}

export interface DomainClass {
  type: string;
  string_value: string;
}

export interface PhotoImageFullSize {
  type: Type;
  image_value: ImageValue;
}

export interface ImageValue {
  url: string;
  width: number;
  height: number;
  alt: Alt;
}

export enum Alt {
  DenoNews = "Deno News",
}

export enum Type {
  Image = "IMAGE",
}

export interface EColor {
  type: string;
  image_color_value: ProfileBannerExtensionsMediaColor;
}

export interface ProfileBannerExtensionsMediaColor {
  palette: Palette[];
}

export interface Palette {
  percentage: number;
  rgb: RGB;
}

export interface RGB {
  red: number;
  green: number;
  blue: number;
}

export interface CardPlatform {
  platform: Platform;
}

export interface Platform {
  device: Device;
  audience: Audience;
}

export interface Audience {
  name: string;
  bucket: null;
}

export interface Device {
  name: string;
  version: string;
}

export interface TweetEntities {
  hashtags: any[];
  symbols: any[];
  user_mentions: any[];
  urls: URLElement[];
}

export interface URLElement {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface TweetEXT {
  superFollowMetadata: SuperFollowMetadata;
  editControl: EditControl;
  unmentionInfo: SuperFollowMetadata;
}

export interface EditControl {
  r: EditControlR;
  ttl: number;
}

export interface EditControlR {
  ok: PurpleOk;
}

export interface PurpleOk {
  initial: OkInitial;
}

export interface OkInitial {
  editTweetIds: string[];
  editableUntilMsecs: string;
  editsRemaining: string;
  isEditEligible: boolean;
}

export interface SuperFollowMetadata {
  r: UnmentionInfoR;
  ttl: number;
}

export interface UnmentionInfoR {
  ok: Broadcasts;
}

export interface EXTEditControl {
  initial: EXTEditControlInitial;
}

export interface EXTEditControlInitial {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  edits_remaining: string;
  is_edit_eligible: boolean;
}

export interface QuotedStatusPermalink {
  url: string;
  expanded: string;
  display: string;
}

export interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: null | string;
  entities: UserEntities;
  protected: boolean;
  followers_count: number;
  fast_followers_count: number;
  normal_followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: null;
  time_zone: null;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  media_count: number;
  lang: null;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: null | string;
  profile_background_image_url_https: null | string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_image_extensions_sensitive_media_warning: null;
  profile_image_extensions_media_availability: null;
  profile_image_extensions_alt_text: null;
  profile_image_extensions_media_color: ProfileBannerExtensionsMediaColor;
  profile_image_extensions: ProfileExtensions;
  profile_banner_extensions_sensitive_media_warning: null;
  profile_banner_extensions_media_availability: null;
  profile_banner_extensions_alt_text: null;
  profile_banner_extensions_media_color: ProfileBannerExtensionsMediaColor;
  profile_banner_extensions: ProfileExtensions;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  pinned_tweet_ids: number[];
  pinned_tweet_ids_str: string[];
  has_custom_timelines: boolean;
  can_dm: null;
  following: null;
  follow_request_sent: null;
  notifications: null;
  muting: null;
  blocking: null;
  blocked_by: null;
  want_retweets: null;
  advertiser_account_type: string;
  advertiser_account_service_levels: string[];
  profile_interstitial_type: string;
  business_profile_state: string;
  translator_type: string;
  withheld_in_countries: any[];
  followed_by: null;
  ext_has_nft_avatar: boolean;
  ext: UserEXT;
  require_some_consent: boolean;
}

export interface UserEntities {
  url?: URLClass;
  description: URLClass;
}

export interface URLClass {
  urls: URLElement[];
}

export interface UserEXT {
  hasNftAvatar: HasNftAvatar;
  highlightedLabel: HighlightedLabel;
  superFollowMetadata: PurpleSuperFollowMetadata;
}

export interface HasNftAvatar {
  r: HasNftAvatarR;
  ttl: number;
}

export interface HasNftAvatarR {
  ok: boolean;
}

export interface HighlightedLabel {
  r: HighlightedLabelR;
  ttl: number;
}

export interface HighlightedLabelR {
  ok: FluffyOk;
}

export interface FluffyOk {
  label?: Label;
}

export interface Label {
  description: string;
  badge: Badge;
  userLabelType: string;
  longDescription: LongDescription;
}

export interface Badge {
  url: string;
}

export interface LongDescription {
  text: string;
  entities: Entity[];
}

export interface Entity {
  fromIndex: number;
  toIndex: number;
  ref: Ref;
}

export interface Ref {
  mention: Mention;
}

export interface Mention {
  id: string;
  screenName: string;
}

export interface PurpleSuperFollowMetadata {
  r: PurpleR;
  ttl: number;
}

export interface PurpleR {
  ok: TentacledOk;
}

export interface TentacledOk {
  superFollowEligible: boolean;
  superFollowing: boolean;
  superFollowedBy: boolean;
  exclusiveTweetFollowing: boolean;
  privateSuperFollowing: boolean;
}

export interface ProfileExtensions {
  mediaStats: MediaStats;
}

export interface MediaStats {
  r: MediaStatsR;
  ttl: number;
}

export interface MediaStatsR {
  missing: null;
}

export interface Timeline {
  id: string;
  instructions: Instruction[];
}

export interface Instruction {
  addEntries?: AddEntries;
  replaceEntries?: ReplaceEntries;
}

export interface AddEntries {
  entries: Entry[];
}

export interface ReplaceEntries {
  entries: Entry[];
}

export interface Entry {
  entryId: string;
  sortIndex: string;
  content: EntryContent;
}

export interface EntryContent {
  item?: Item;
  operation?: Operation;
}

export interface Item {
  content: ItemContent;
  clientEventInfo: ClientEventInfo;
}

export interface ClientEventInfo {
  component: string;
  element: string;
  details: Details;
}

export interface Details {
  timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
  controllerData: string;
}

export interface ItemContent {
  tweet: ContentTweet;
}

export interface ContentTweet {
  id: string;
  displayType: string;
}

export interface Operation {
  cursor: Cursor;
}

export interface Cursor {
  value: string;
  cursorType: string;
}
