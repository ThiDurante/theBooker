import { userLogin } from '../services/interfaces/IUserService';
import User, { UserAttributes } from '../database/models/UserModel';
import IUserDAL from './interfaces/IUserDAL';

export default class UserDAL implements IUserDAL {
  async getByEmail(userLogin: userLogin): Promise<UserAttributes | null> {
    const findUser = await User.findOne({
      where: [{ email: userLogin.email }],
    });
    if (findUser) {
      return findUser.dataValues;
    }
    return null;
  }
}
