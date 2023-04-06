import User, { UserAttributes } from '../../database/models/UserModel';

export interface userLogin {
  email: string;
  password: string;
}

export interface loginReturn {
  message: string;
  logged: boolean;
}

export interface loginReturnWithToken extends loginReturn {
  token: string;
  user?: UserAttributes;
}

export default interface IUserService {
  login(user: userLogin): Promise<loginReturnWithToken>;
  getAll(): Promise<User[]>;
  insert(user: UserAttributes): Promise<UserAttributes>;
  remove(id: number): Promise<void>;
}
