import * as bcrypt from 'bcrypt';
import { UserAttributes } from '../database/models/UserModel';

const encryptPassword = (user: UserAttributes): string => {
  const salt = 5;
  return bcrypt.hashSync(user.password as string, salt);
};

export default encryptPassword;
