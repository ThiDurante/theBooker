import { Sequelize } from 'sequelize-typescript';
import User from '../models/UserModel';
import Book from '../models/BookModel';
import 'dotenv/config';
import { Dialect } from 'sequelize';

const sequelizeCon = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.MYSQL_HOST,
  dialect: (process.env.MYSQL_DIALECT as Dialect) || 'mysql',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT),
  logging: false,
  // models: [User, Book], // or [Player, Team],
});

sequelizeCon.addModels([User, Book]);

export default sequelizeCon;
