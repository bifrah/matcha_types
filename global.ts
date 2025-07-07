import { User } from './User_type';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
