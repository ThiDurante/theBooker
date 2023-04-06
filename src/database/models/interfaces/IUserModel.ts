import { Model, Optional } from 'sequelize';
import Book from '../BookModel';

interface IUserWithId {
  id: number;
  username: string;
  email: string;
  password: string;
  books?: Number[];
  rentedBooks: string | [];
}
export interface IUserReady {
  id: number;
  username: string;
  email: string;
  password?: string;
  books?: Number[];
  rentedBooks: [];
}

interface UserCreationAttributes extends Optional<IUserWithId, 'id'> {}

export default interface UserModel
  extends Model<IUserWithId, UserCreationAttributes>,
    IUserWithId {
  createdAt?: Date;
  updatedAt?: Date;
}
