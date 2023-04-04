import { Model, Optional } from 'sequelize';

interface BookAttributes {
  id: number;
  name: string;
  pages: string;
  numberOfPages: number;
  releaseYear: Date;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

export default interface BookInstance
  extends Model<BookAttributes, BookCreationAttributes>,
    BookAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
