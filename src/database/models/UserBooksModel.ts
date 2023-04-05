import { Column, ForeignKey } from 'sequelize-typescript';
import Book from './BookModel';
import { Model } from 'sequelize';
import User from './UserModel';

export default class UserBooks extends Model {
  @ForeignKey(() => Book)
  @Column
  bookId!: number;
  @ForeignKey(() => User)
  @Column
  userId!: number;
}
