import { Optional } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import Book from './BookModel';
// import UserBooks from './UserBooksModel';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  books: Number[];
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  timestamps: true,
  paranoid: true,
})
export default class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;
  @Column
  username!: string;
  @Column
  email!: string;
  @Column
  password!: string;
  @Column
  role!: string;

  @BelongsToMany(() => Book, {
    through: 'UserBooks',
    foreignKey: 'userId',
    otherKey: 'bookId',
  })
  books?: Book[];
}
