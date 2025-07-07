export enum NotificationType {
  Message_received = 'Message_received',
  Profile_viewed = 'Profile_viewed',
  Like_received = 'Like_received',
  Match = 'Match',
  Unlike = 'Unlike',
}

export interface Notification {
  uuid: string;
  user_uuid: string;
  source_user_uuid: string;
  source_firstname: string;
  type: NotificationType;
  is_read: boolean;
  created_at: Date;
}
