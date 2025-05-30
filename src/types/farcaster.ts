export type FarcasterUser = {
  object: "user";
  fid: number;
  username: string;
  display_name: string;
  custody_address: string;
  pfp_url: string;
  profile: {
    bio: {
      text: string;
      mentioned_profiles: string[];
    };
    location: {
      latitude: number;
      longitude: number;
      address: {
        city: string;
        state: string;
        state_code: string;
        country: string;
        country_code: string;
      };
    };
  };
  follower_count: number;
  following_count: number;
  verifications: string[];
  verified_addresses: {
    eth_addresses: string[];
    sol_addresses: string[];
  };
  verified_accounts?: [
    {
      platform: "x";
      username: string;
    }
  ];
  power_badge: boolean;
  experimental: {
    neynar_user_score: number;
  };
  viewer_context: {
    following: boolean;
    followed_by: boolean;
    blocking: boolean;
    blocked_by: boolean;
  };
};

export type FarcasterChannel = {
  id: string;
  url: string;
  name: string;
  description: string;
  object: string;
  created_at: number;
  follower_count: number;
  external_link: {
    title: string;
    url: string;
  };
  image_url: string;
  parent_url: string;
  lead: FarcasterUser;
  moderator_fids: Array<number>;
  member_count: number;
  pinned_cast_hash: string;
  viewer_context: {
    following: boolean;
    role: string;
  };
};

export type FarcasterEmbed = {
  url?: string;
  metadata?: {
    _status: string;
    content_type: string;
    content_length: number;
    image: {
      height_px: number;
      width_px: number;
    };
    video: {
      duration_s: number;
      stream: Array<{
        codec_name: string;
        height_px: number;
        width_px: number;
      }>;
    };
    html: {
      favicon: string;
      modifiedTime: string;
      ogArticleAuthor: string;
      ogArticleExpirationTime: string;
      ogArticleModifiedTime: string;
      ogArticlePublishedTime: string;
      ogArticlePublisher: string;
      ogArticleSection: string;
      ogArticleTag: string;
      ogAudio: string;
      ogAudioSecureURL: string;
      ogAudioType: string;
      ogAudioURL: string;
      ogAvailability: string;
      ogDate: string;
      ogDescription: string;
      ogDeterminer: string;
      ogEpisode: string;
      ogImage: Array<{
        height: string;
        type: string;
        url: string;
        width: string;
        alt: string;
      }>;
      ogLocale: string;
      ogLocaleAlternate: string;
      ogLogo: string;
      ogMovie: string;
      ogPriceAmount: string;
      ogPriceCurrency: string;
      ogProductAvailability: string;
      ogProductCondition: string;
      ogProductPriceAmount: string;
      ogProductPriceCurrency: string;
      ogProductRetailerItemId: string;
      ogSiteName: string;
      ogTitle: string;
      ogType: string;
      ogUrl: string;
      ogVideo: Array<{
        height: string;
        type: string;
        url: string;
        width: string;
      }>;
      ogVideoActor: string;
      ogVideoActorId: string;
      ogVideoActorRole: string;
      ogVideoDirector: string;
      ogVideoDuration: string;
      ogVideoOther: string;
      ogVideoReleaseDate: string;
      ogVideoSecureURL: string;
      ogVideoSeries: string;
      ogVideoTag: string;
      ogVideoTvShow: string;
      ogVideoWriter: string;
      ogWebsite: string;
      updatedTime: string;
      oembed: {
        type: string;
        version: string;
        title: string;
        author_name: string;
        author_url: string;
        provider_name: string;
        provider_url: string;
        cache_age: string;
        thumbnail_url: string;
        thumbnail_width: number;
        thumbnail_height: number;
        html: string;
        width: number;
        height: number;
      };
    };
  };
  cast?: FarcasterCast;
};

export type FarcasterCast = {
  hash: string;
  parent_hash: string;
  parent_url: string;
  root_parent_url: string;
  parent_author: {
    fid: number;
  };
  author: FarcasterUser;
  text: string;
  timestamp: string;
  embeds: Array<FarcasterEmbed>;
  type: string;
  frames: Array<{
    version: string;
    image: string;
    buttons: Array<{
      title: string;
      index: number;
      action_type: string;
      target: string;
      post_url: string;
    }>;
    post_url: string;
    frames_url: string;
    title: string;
    image_aspect_ratio: string;
    input: {
      text: string;
    };
    state: {
      serialized: string;
    };
  }>;
  reactions: {
    likes: Array<{
      fid: number;
    }>;
    recasts: Array<{
      fid: number;
      fname: string;
    }>;
    likes_count: number;
    recasts_count: number;
  };
  replies: {
    count: number;
  };
  thread_hash: string;
  mentioned_profiles: Array<FarcasterUser>;
  channel: FarcasterChannel;
  viewer_context: {
    liked: boolean;
    recasted: boolean;
  };
  author_channel_context: {
    following: boolean;
    role: string;
  };
};

export type ConversationCast = FarcasterCast & {
  direct_replies: Array<ConversationCast>;
};

export type FarcasterSigner = {
  object: string;
  signer_uuid: string;
  public_key: string;
  status: string;
  signer_approval_url: string;
  fid: number;
  permissions: Array<string>;
};
