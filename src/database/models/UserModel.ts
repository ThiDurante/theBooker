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
import { number } from 'joi';
// import UserBooks from './UserBooksModel';

export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password?: string;
  role: string;
  books?: Number[];
  rentedBooks: Number[];
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
  @Column
  rentedBooks!: Number[];

  @BelongsToMany(() => Book, {
    through: 'UserBooks',
    foreignKey: 'userId',
    otherKey: 'bookId',
  })
  books?: Number[];
}
