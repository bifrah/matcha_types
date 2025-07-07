export interface Chat {
  uuid: string;
  sender_uuid: string;
  receiver_uuid: string;
  created_at: Date;
  message: string;
}
