import { NextFunction, Request, RequestHandler, Response } from 'express';
import IUserController from './interfaces/IUserController';
import IUserService from '../services/interfaces/IUserService';

export default class UserController implements IUserController {
  private _userService: IUserService;
  constructor(userService: IUserService) {
    this._userService = userService;
  }
  async insert(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const user = req.body;
      const createdUser = await this._userService.insert(user);
      return res
        .status(200)
        .json({ message: 'Creation Successfull', data: createdUser });
    } catch (error) {
      next(error);
    }
  }

  async getAll(
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<Response | void> {
    const user = await this._userService.getAll();
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
        return res.status(200).json({
          message: logged.message,
          token: logged.token,
          user: logged.user,
        });
      }
      return res.status(401).json({ message: logged.message });
    } catch (error) {
      next(error);
    }
  }
}
