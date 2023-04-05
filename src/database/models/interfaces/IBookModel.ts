import { Model, Optional } from 'sequelize';
import User from '../UserModel';

interface BookAttributes {
  id: number;
  name: string;
  numberOfPages: number;
  releaseYear: Date;
  users?: User[];
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

export default interface BookInstance
  extends Model<BookAttributes, BookCreationAttributes>,
    BookAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
