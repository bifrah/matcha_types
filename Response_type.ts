import { Chat } from './Chat';

export interface ResponseBody<T> {
  message: string;
  statusCode: number;
  data: T | null;
}

export interface SigninResponse {
  token: string;
  hasCompleteProfile: boolean;
}

export interface ValidateUserResponse {
  userUuid: string;
}

export interface PostMessageResponse {
  messageSent: string;
}

export interface GetMessagesResponse {
  messages: Chat[];
}
