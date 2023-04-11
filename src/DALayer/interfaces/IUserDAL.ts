import User, { UserAttributes } from '../../database/models/UserModel';
import { userLogin } from '../../services/interfaces/IUserService';

export default interface IUserDAL {
  getByEmail(userLogin: userLogin): Promise<UserAttributes | null>;
  getByUsername(userLogin: UserAttributes): Promise<UserAttributes | null>;
  getAll(): Promise<User[]>;
  insert(user: UserAttributes): Promise<UserAttributes>;
  remove(id: number): Promise<void>;
  findById(id: number): Promise<UserAttributes | null>;
}
