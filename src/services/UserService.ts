import User, { UserAttributes } from '../database/models/UserModel';
import Jwt from '../classes/Jwt';
import Validations from '../classes/Validation';
import IUserDAL from '../DALayer/interfaces/IUserDAL';
import IUserService, {
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
      noPasswordUser.rentedBooks = JSON.parse(
        String(noPasswordUser.rentedBooks)
      );
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

  async insert(user: UserAttributes): Promise<UserAttributes> {
    Validations.insertUser(user);
    user.rentedBooks = JSON.stringify(user.rentedBooks);
    const newUser = await this._userDAL.insert(user);
    const noPasswordUser = newUser;
    delete noPasswordUser.password;
    noPasswordUser.rentedBooks = JSON.parse(String(noPasswordUser.rentedBooks));

    return noPasswordUser;
  }

  async findById(id: number): Promise<UserAttributes> {
    const user = await this._userDAL.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    delete user.password;
    user.rentedBooks = JSON.parse(String(user.rentedBooks));
    return user;
  }

  async remove(id: number): Promise<void> {
    await this._userDAL.remove(id);
  }
}
