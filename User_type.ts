export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum SexualOrientation {
  Heterosexual = 'Heterosexual',
  Homosexual = 'Homosexual',
  Bisexual = 'Bisexual',
}

export interface User {
  uuid: string;
  login: string;
  password: string;
  email: string;
  enabled: boolean;
  firstname: string;
  lastname: string;
  created_at: Date;
  updated_at: Date;
  last_connection: Date | null;
  isOnline: boolean;
  lat: number | null;
  lon: number | null;
  city: string | null;
  birthdate: Date | null;
  gender: Gender | null;
  sexual_orientation: SexualOrientation | null;
  biography: string | null;
  hasCompleteProfile: boolean;
  fame_rating: number;
}

export type UserWith<T extends object = NonNullable<unknown>> = User & T;

export type ProfileSafeUser = Omit<
  UserWith,
  | 'login'
  | 'password'
  | 'email'
  | 'enabled'
  | 'created_at'
  | 'updated_at'
  | 'lat'
  | 'lon'
  | 'fame_rating'
>;

export type LikeSafeUser = Omit<
  User,
  | 'login'
  | 'password'
  | 'email'
  | 'enabled'
  | 'created_at'
  | 'updated_at'
  | 'lat'
  | 'lon'
  | 'hasCompleteProfile'
  | 'fame_rating'
>;

export type CreateUserModelPayload = Pick<
  User,
  | 'login'
  | 'password'
  | 'email'
  | 'firstname'
  | 'lastname'
  | 'birthdate'
  | 'last_connection'
  | 'isOnline'
  | 'lat'
  | 'lon'
  | 'city'
  | 'gender'
  | 'sexual_orientation'
  | 'biography'
  | 'hasCompleteProfile'
  | 'fame_rating'
>;

export type UpdateUserModelPayload = {
  uuid: User['uuid'];
} & Partial<
  Pick<
    User,
    | 'login'
    | 'password'
    | 'email'
    | 'enabled'
    | 'firstname'
    | 'lastname'
    | 'birthdate'
    | 'last_connection'
    | 'isOnline'
    | 'lat'
    | 'lon'
    | 'city'
    | 'gender'
    | 'sexual_orientation'
    | 'biography'
    | 'fame_rating'
  >
> & {
    hobbies?: string[];
  };

export type UserNotFoundMessage = (extraMessage?: string) => string;

export type UserHobby = {
  user_uuid: string;
  hobby_uuid: string;
};
