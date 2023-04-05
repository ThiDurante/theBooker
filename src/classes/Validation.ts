import Joi = require('joi');
import { userLogin } from '../services/interfaces/IUserService';
import { joiPasswordExtendCore } from 'joi-password';

export default class Validations {
  static login(user: userLogin): boolean {
    const JoiPassword = Joi.extend(joiPasswordExtendCore);
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: JoiPassword.string()
        .minOfSpecialCharacters(2)
        .minOfLowercase(2)
        .minOfUppercase(2)
        .minOfNumeric(2)
        .noWhiteSpaces(),
    });
    loginSchema.validate(user);
    return true;
  }
}
