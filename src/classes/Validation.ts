import Joi = require('joi');
import { userLogin } from '../services/interfaces/IUserService';
import { UserAttributes } from '../database/models/UserModel';
import { BookAttributes } from '../database/models/BookModel';

export default class Validations {
  static login(user: userLogin): boolean {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
    const { error } = loginSchema.validate(user);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }

  static insertUser(user: UserAttributes): boolean {
    const userSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      username: Joi.string().min(3).required(),
      role: Joi.string().required(),
      age: Joi.number().max(120),
      books: Joi.array().items(Joi.number()).required(),
      rentedBooks: Joi.array().items(Joi.number()).required(),
    });
    const { error } = userSchema.validate(user);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }

  static bookValidation(book: BookAttributes): boolean {
    const bookSchema = Joi.object({
      name: Joi.string().required(),
      numberOfPages: Joi.number().required(),
      releaseYear: Joi.date().required(),
      author: Joi.string().required(),
      user: Joi.object(),
      image: Joi.string(),
    });

    const { error } = bookSchema.validate(book);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }
}
