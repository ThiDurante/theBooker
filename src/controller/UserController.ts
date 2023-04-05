import { NextFunction, Request, RequestHandler, Response } from 'express';
import IUserController from './interfaces/IUserController';
import User from '../database/models/UserModel';
import sequelizeCon from '../database/config/connection';
import Book from '../database/models/BookModel';
import IUserService from '../services/interfaces/IUserService';

export default class UserController implements IUserController {
  private _userService: IUserService;
  constructor(userService: IUserService) {
    this._userService = userService;
  }
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const user = req.body;
    const createdUser = await User.create(user);
    return res
      .status(200)
      .json({ message: 'Creation Successfull', data: createdUser });
  }

  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const user = await User.findAll({ include: Book });
    return res.status(200).json(user);
  }

  /*
  {
  login expects an user like
  "email": "email@email.com",
  "password": "secret_passord"}
  */
  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const userLogin = req.body;
      const logged = await this._userService.login(userLogin);
      if (logged.logged) {
        return res
          .status(200)
          .json({ message: logged.message, token: 'token' });
      }
      return res.status(401).json({ message: logged.message });
    } catch (error) {
      next(error);
    }
  }
}
