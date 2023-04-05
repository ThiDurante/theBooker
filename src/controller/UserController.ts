import { NextFunction, Request, RequestHandler, Response } from 'express';
import IUserController from './interfaces/IUserController';
import User from '../database/models/UserModel';
import sequelizeCon from '../database/config/connection';
import Book from '../database/models/BookModel';

export default class UserController implements IUserController {
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
}
