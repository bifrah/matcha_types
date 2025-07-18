import { LikeSafeUser, ProfileSafeUser } from './User_type';
import { Chat } from './Chat';
import { Views } from './Views_type';

export interface ResponseBody<T> {
  message: string;
  statusCode: number;
  data: T | null;
}

//Auth controller
export interface SignupResponse {
    data: string[] | null;
}

export interface SigninResponse {
  token: string;
  hasCompleteProfile: boolean;
}

export interface ValidateUserResponse {
  userUuid: string;
}

// User/Hobbies Controller
export interface FindHobbyResponse {
  uuids: string[];
}

// User/Notifications
export interface GetNotificationsResponse {
  Notifications: Notification[];
}

export interface PatchNotificationssResponse {
  messages: string;
}

// User/Profile Likes Controller
export interface ProfilesLikesResponse {
  usersILike: LikeSafeUser[];
  usersWhoLikeMe: LikeSafeUser[];
  isAMatch: LikeSafeUser[];
}

// User/Profile/ View Controller
export interface ViewsResponse {
  viewers_uuids: Pick<Views, 'viewerUuid'>[]
}

// Update Profile
export interface UpdateResponse {
  updated_profile: ProfileSafeUser | null;
}

// Photo Controller
export interface AddPhotoResponse {
  photo_uuid: string;
}

// Chat Controller
export interface PostMessageResponse {
  messageSent: string;
}

export interface GetMessagesResponse {
  messages: Chat[];
}
