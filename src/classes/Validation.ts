import Joi = require('joi');
import { userLogin } from '../services/interfaces/IUserService';
import { joiPasswordExtendCore } from 'joi-password';
import User from '../database/models/UserModel';
import { off } from 'process';

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

  static insertUser(user: User): boolean {
    const userSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      username: Joi.string().min(3).required(),
      role: Joi.string().required(),
      age: Joi.number().max(120),
      books: Joi.array().items(Joi.number()),
    });
    const { error } = userSchema.validate(user);
    if (error) {
      throw new Error(error.message);
    }
    return true;
  }
}
