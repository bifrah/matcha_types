import predefinedLocations from '../knex/utils/city_alias';

import { Gender, SexualOrientation, User } from './User_type';

export interface Filters {
  minAge?: number;
  maxAge?: number;
  gender?: Gender[];
  sexual_orientation?: SexualOrientation[];
  localisation?: number;
  min_fame_rating?: number;
  max_fame_rating?: number;
  hobbies?: string[];
  city?: keyof typeof predefinedLocations;
}

export type SortKey = 'age' | 'distance' | 'fame_rating' | 'hobbies';
export type SortOrder = 'ASC' | 'DESC';

export interface BrowseProfileBody {
  filters?: Filters;
  page?: number;
  limit?: number;
  sortKey?: SortKey;
  sortOrder?: SortOrder;
}

export interface Page<T> {
  items: T[];
  page: number;
  limit: number;
  totalItems: number;
}

export type UserBrowser = Pick<
  User,
  'firstname' | 'city' | 'gender' | 'sexual_orientation' | 'biography' | 'fame_rating'
> & {
  age: number;
  distance: number;
  hobbies: string[];
};
