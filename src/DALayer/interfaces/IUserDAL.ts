import User, { UserAttributes } from '../../database/models/UserModel';
import { userLogin } from '../../services/interfaces/IUserService';

export default interface IUserDAL {
  getByEmail(userLogin: userLogin): Promise<UserAttributes | null>;
  getAll(): Promise<User[]>;
  insert(user: User): Promise<UserAttributes>;
}
