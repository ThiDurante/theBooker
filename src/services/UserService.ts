import User, { UserAttributes } from '../database/models/UserModel';
import Jwt from '../classes/Jwt';
import Validations from '../classes/Validation';
import IUserDAL from '../DALayer/interfaces/IUserDAL';
import IUserService, {
  loginReturn,
  loginReturnWithToken,
  userLogin,
} from './interfaces/IUserService';

export default class UserService implements IUserService {
  private _userDAL: IUserDAL;
  constructor(userDAL: IUserDAL) {
    this._userDAL = userDAL;
  }

  async login(user: userLogin): Promise<loginReturnWithToken> {
    Validations.login(user);
    const findUser = await this._userDAL.getByEmail(user);
    if (findUser) {
      const noPasswordUser = findUser;
      delete noPasswordUser.password;
      const token = new Jwt().generateToken(findUser);
      return {
        message: 'Login Successfull',
        logged: true,
        token,
        user: noPasswordUser,
      };
    }
    return { message: 'Login Failed', logged: false, token: '' };
  }

  async getAll(): Promise<User[]> {
    const users = await this._userDAL.getAll();
    return users;
  }

  async insert(user: User): Promise<UserAttributes> {
    Validations.insertUser(user);
    const newUser = await this._userDAL.insert(user);
    const noPasswordUser = newUser as UserAttributes;
    delete noPasswordUser.password;
    console.log(noPasswordUser);

    return noPasswordUser;
  }
}
