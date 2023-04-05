import User from '../../database/models/UserModel';
import { userLogin } from '../../services/interfaces/IUserService';

export default interface IUserDAL {
  getByEmail(userLogin: userLogin): Promise<User | null>;
}
