import { NextFunction, Request, RequestHandler, Response } from 'express';
import IUserController from './interfaces/IUserController';
import User from '../database/models/UserModel';
import sequelizeCon from '../database/config/connection';

export default class UserController implements IUserController {
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const user = req.body;
    await sequelizeCon.sync();
    const createdUser = await User.create(user);
    return res
      .status(200)
      .json({ message: 'Creation Successfull', data: createdUser });
  }
}
