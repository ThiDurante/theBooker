import { Optional } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
import Book from './BookModel';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
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
  inventory!: Book[];
}
