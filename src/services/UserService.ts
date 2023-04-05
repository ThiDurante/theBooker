import Validations from '../classes/Validation';
import IUserDAL from '../DALayer/interfaces/IUserDAL';
import IUserService, {
  loginReturn,
  userLogin,
} from './interfaces/IUserService';

export default class UserService implements IUserService {
  private _userDAL: IUserDAL;
  constructor(userDAL: IUserDAL) {
    this._userDAL = userDAL;
  }

  async login(user: userLogin): Promise<loginReturn> {
    Validations.login(user);
    const findUser = await this._userDAL.getByEmail(user);
    if (findUser) {
      return { message: 'Login Successfull', logged: true };
    }
    return { message: 'Login Failed', logged: false };
  }
}
