import IUserDAL from '../../DALayer/interfaces/IUserDAL';

export interface userLogin {
  email: string;
  password: string;
}

export interface loginReturn {
  message: string;
  logged: boolean;
}

export default interface IUserService {
  login(user: userLogin): Promise<loginReturn>;
}
