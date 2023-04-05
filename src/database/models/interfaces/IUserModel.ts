import { Model, Optional } from 'sequelize';
import Book from '../BookModel';

interface IUserithId {
  id: number;
  username: string;
  email: string;
  password: string;
  books?: Number[];
}

interface UserCreationAttributes extends Optional<IUserithId, 'id'> {}

export default interface UserModel
  extends Model<IUserithId, UserCreationAttributes>,
    IUserithId {
  createdAt?: Date;
  updatedAt?: Date;
}
