export type RecommendBannersType = {
  imageUrl: string;
  targetId: number;
  adid: string;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
  exclusive: boolean;
  monitorImpress: string;
  monitorClick: string;
  monitorType: string;
  monitorImpressList: string;
  monitorClickList: string;
  monitorBlackList: string;
  extMonitor: string;
  extMonitorInfo: string;
  adSource: string;
  adLocation: string;
  adDispatchJson: string;
  encodeId: string;
  program: string;
  event: string;
  video: string;
  song: string;
  scm: string;
};
export interface IRecommendBannners {
  banners: RecommendBannersType[];
}

export type HotRecommend = {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
};

export interface IHotRecommend {
  result: HotRecommend[];
}

type TopPlayListTrack = {
  name: string;
  id: number;
  pst: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: any;
  tns: string[];
};

type TopPlayListSubscriber = {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: any;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: any;
  backgroundImgId: any;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  avatarImgId_str: string;
};

export type TopPlayList = {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: any[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  officialPlaylistType?: any;
  subscribers: TopPlayListSubscriber[];
  subscribed?: any;
  creator: any;
  tracks: TopPlayListTrack[];
  videoIds?: any;
  videos?: any;
  trackIds: any[];
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
  sharedUsers?: any;
  historySharedUsers?: any;
  ToplistType: string;
};

export interface ITopRecommend {
  code: number;
  playlist: TopPlayList;
}
