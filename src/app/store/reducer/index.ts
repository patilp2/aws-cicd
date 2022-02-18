import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromHeaderFooter from './header-footer.reducer';
import * as fromHome from './home.reducer';
import * as fromLogin from './login.reducer';
import * as fromOtpVerify from './otp-verify.reducer';
import * as fromProfile from './profile.reducer';
import * as fromRefreshToen from './refresh-token.reducer';
import * as fromProjectDetails from './project-details.reducer';
import * as fromGetcomment from './comment.reducer';
import * as fromLike from './like.reducer';
import * as fromMessage from './message.reducer';
import * as fromNewsandUpdate from './news-updates.reducer';
import * as fromUser from './user.reducer';
import * as fromResend from './resend.reducer';
import * as fromUserRole from './user-role.reducer';
import * as fromPlaylist from './youtube.reducer';
import * as fromAccesstoken from './access-token.reducer';

export interface RootReducerState {
  headers: fromHeaderFooter.HeaderFooterReducerState;
  homes: fromHome.HomeReducerState;
  resendVerify: fromResend.ResendReducerState;
  userVerify: fromUser.UserReducerState;
  users: fromLogin.LoginReducerState;
  userOtpToken: fromOtpVerify.OtpVerifyReduceState;
  userRefreshToken: fromRefreshToen.refreshTokenReduceState;
  projectDetails: fromProjectDetails.ProjectDetailsReducerState;
  getComment: fromGetcomment.CommentReducerState;
  profile: fromProfile.ProfileReducerState;
  like: fromLike.LikeReducerState;
  message: fromMessage.MessageReducerState;
  newsandUpdate: fromNewsandUpdate.NewsUpdateReducerState;
  userRole: fromUserRole.UserRoleState;
  playlist: fromPlaylist.YoutubeReducerState;
  accessToken: fromAccesstoken.AccessTokenReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  headers: fromHeaderFooter.HeaderFooterReducer,
  homes: fromHome.HomeReducer,
  resendVerify: fromResend.ResendReducer,
  userVerify: fromUser.UserReducer,
  users: fromLogin.LoginReducer,
  userOtpToken: fromOtpVerify.OtpVerifyReduce,
  userRefreshToken: fromRefreshToen.refreshTokenReduce,
  projectDetails: fromProjectDetails.ProjectDetailsReducer,
  getComment: fromGetcomment.CommentReducer,
  profile: fromProfile.ProfileReducer,
  like: fromLike.LikeReducer,
  message: fromMessage.MessageReducer,
  newsandUpdate: fromNewsandUpdate.NewsUpdateReducer,
  userRole: fromUserRole.UserRoleReducer,
  playlist: fromPlaylist.youtubeReducer,
  accessToken: fromAccesstoken.AccessTokenReducer,
};

// header-footer
export const getHeaderFooterState = (state: RootReducerState) => state.headers;

export const getHeaderFooterLoaded = createSelector(
  getHeaderFooterState,
  fromHeaderFooter.getLoaded
);
export const getHeaderFooterLoading = createSelector(
  getHeaderFooterState,
  fromHeaderFooter.getLoading
);
export const getHeaderFooter = createSelector(
  getHeaderFooterState,
  fromHeaderFooter.getHeaderFooter
);

// access token //
export const getAccessTokenState = (state: RootReducerState) =>
  state.accessToken;

export const getAccessTokenLoading = createSelector(
  getAccessTokenState,
  fromAccesstoken.getAccessTokenLoading
);
export const getAccessToken = createSelector(
  getAccessTokenState,
  fromAccesstoken.getAccessToken
);

// home
export const getHomeState = (state: RootReducerState) => state.homes;

export const getHomeLoaded = createSelector(getHomeState, fromHome.getLoaded);
export const getHomeLoading = createSelector(getHomeState, fromHome.getLoading);
export const getHomes = createSelector(getHomeState, fromHome.getHomes);

// login
export const getLoginState = (state: RootReducerState) => state.users;

export const getLoginLoading = createSelector(
  getLoginState,
  fromLogin.getLoginLoading
);
export const getLogin = createSelector(getLoginState, fromLogin.getLogin);

// user-role
export const getUserRoleState = (state: RootReducerState) => state.userRole;

export const getUserRoleLoading = createSelector(
  getUserRoleState,
  fromUserRole.getUserRoleLoading
);
export const getUserRole = createSelector(
  getUserRoleState,
  fromUserRole.getUserRole
);

// User
export const getUserState = (state: RootReducerState) => state.userVerify;

export const getUserLoading = createSelector(
  getUserState,
  fromUser.getUserLoading
);
export const getUserVerify = createSelector(
  getUserState,
  fromUser.getUserVerify
);

// Resend Otp
export const getResendState = (state: RootReducerState) => state.resendVerify;

export const getResendLoading = createSelector(
  getResendState,
  fromResend.getResendLoading
);
export const getResendVerify = createSelector(
  getResendState,
  fromResend.getResendVerify
);

// OTP Verify
export const getOtpVerifyState = (state: RootReducerState) =>
  state.userOtpToken;

export const getOtpVerifyLoaded = createSelector(
  getOtpVerifyState,
  fromOtpVerify.getOtpVerifyLoaded
);
export const getOtpVerifyLoading = createSelector(
  getOtpVerifyState,
  fromOtpVerify.getOtpVerifyLoading
);
export const getOtpVerify = createSelector(
  getOtpVerifyState,
  fromOtpVerify.getOtpVerify
);

// OTP RefreshTOken
export const getRefeshTokenSate = (state: RootReducerState) =>
  state.userRefreshToken;

export const getRefeshTokenLoaded = createSelector(
  getRefeshTokenSate,
  fromRefreshToen.getRefeshTokenLoaded
);
export const getRefeshTokenLoading = createSelector(
  getRefeshTokenSate,
  fromRefreshToen.getRefeshTokenLoading
);
export const getRefeshToken = createSelector(
  getRefeshTokenSate,
  fromRefreshToen.getRefeshToken
);

// project-details
export const getProjetDetailsState = (state: RootReducerState) =>
  state.projectDetails;
export const getprojectDetailsLoaded = createSelector(
  getProjetDetailsState,
  fromProjectDetails.getProjectDetailsLoaded
);
export const getprojectDetailsLoading = createSelector(
  getProjetDetailsState,
  fromProjectDetails.getProjectDetailsLoading
);
export const getprojectDetails = createSelector(
  getProjetDetailsState,
  fromProjectDetails.getProjectDetails
);

// get-Comment
export const getcommentState = (state: RootReducerState) => state.getComment;

export const getcommentLoaded = createSelector(
  getcommentState,
  fromGetcomment.getCommentLoaded
);
export const getcommentLoading = createSelector(
  getcommentState,
  fromGetcomment.getCommentLoading
);
export const getcomment = createSelector(
  getcommentState,
  fromGetcomment.getComment
);
export const postComment = createSelector(
  getcommentState,
  fromGetcomment.postComment
);
export const deleteComment = createSelector(
  getcommentState,
  fromGetcomment.deleteComment
);

// profile
export const profileState = (state: RootReducerState) => state.profile;

export const getProfileLoading = createSelector(
  profileState,
  fromProfile.getProfileLoading
);
export const getProfileLoaded = createSelector(
  profileState,
  fromProfile.getProfileLoaded
);
export const getProfile = createSelector(profileState, fromProfile.getProfile);
export const profileUpdate = createSelector(
  profileState,
  fromProfile.profileUpdate
);

// Like
export const getLikeState = (state: RootReducerState) => state.like;

export const getLikeLoaded = createSelector(
  getLikeState,
  fromLike.getLikeLoaded
);
export const getLikeLoading = createSelector(
  getLikeState,
  fromLike.getLikeLoading
);
export const getLike = createSelector(getLikeState, fromLike.getLike);
export const postLike = createSelector(getLikeState, fromLike.postLike);

// message
export const MessageState = (state: RootReducerState) => state.message;

export const getMessageLoaded = createSelector(
  MessageState,
  fromMessage.getMessageLoaded
);
export const getMessageLoading = createSelector(
  MessageState,
  fromMessage.getMessageLoading
);
export const postMessage = createSelector(
  MessageState,
  fromMessage.postMessage
);
export const getMessageInbox = createSelector(
  MessageState,
  fromMessage.getMessageInbox
);
export const getMessageThread = createSelector(
  MessageState,
  fromMessage.getMessageThread
);

// get News and update

export const getNewsUpdatetate = (state: RootReducerState) =>
  state.newsandUpdate;

export const getNewsUpdateLoaded = createSelector(
  getNewsUpdatetate,
  fromNewsandUpdate.getLoaded
);
export const getNewsUpdateLoading = createSelector(
  getNewsUpdatetate,
  fromNewsandUpdate.getLoading
);
export const getNewsUpdateindex = createSelector(
  getNewsUpdatetate,
  fromNewsandUpdate.getNewupdates
);

// get youtube plylist data

export const getYoutubeState = (state: RootReducerState) => state.playlist;

export const getYoutbeLoaded = createSelector(
  getYoutubeState,
  fromPlaylist.getPlaylistLoaded
);
export const getYoutubeLoading = createSelector(
  getYoutubeState,
  fromPlaylist.getPlaylistLoading
);
export const getPlaylistLoaded = createSelector(
  getYoutubeState,
  fromPlaylist.getPlaylistyoutubes
);
