import { Optional } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

interface BookAttributes {
  id: number;
  name: string;
  pages: string;
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
  id!: number;
  @Column
  name!: string;
  @Column
  pages!: string;
  @Column
  numberOfPages!: number;
  @Column
  realeaseYear!: Date;
  @Column
  author!: string;
}
