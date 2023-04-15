import { Optional } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
} from 'sequelize-typescript';
import User from './UserModel';

export interface BookAttributes {
  id?: number;
  name: string;
  numberOfPages: number;
  releaseYear: Date;
  author: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

@Table({
  timestamps: true,
  paranoid: true,
})
export default class Book extends Model<
  BookAttributes,
  BookCreationAttributes
> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @Column
  name!: string;

  @Column
  numberOfPages!: number;

  @Column
  releaseYear!: Date;

  @Column
  author!: string;

  @Column
  image!: string;

  @BelongsToMany(() => User, {
    through: 'UserBooks',
    foreignKey: 'bookId',
    otherKey: 'userId',
  })
  users?: User[];
}
