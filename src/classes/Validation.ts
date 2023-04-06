import Joi = require('joi');
import { userLogin } from '../services/interfaces/IUserService';
import { joiPasswordExtendCore } from 'joi-password';
import User from '../database/models/UserModel';

export default class Validations {
  static login(user: userLogin): boolean {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
    loginSchema.validate(user);
    return true;
  }

  static insertUser(user: User): boolean {
    const userSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      name: Joi.string().min(3).required(),
      role: Joi.string().required(),
      books: Joi.array().items(Joi.number()),
    });
    userSchema.validate(user);
    return true;
  }
}
