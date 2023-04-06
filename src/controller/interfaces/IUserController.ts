import { NextFunction, Request, RequestHandler, Response } from 'express';

export default interface IUserController {
  getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
  login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
  insert(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
  // findById(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response | void>;
  // updateUser(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response | void>
  remove(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
}

interface IUser {
  username: string;
  email: string;
  Password: string;
}

interface IUserId extends IUser {
  id: number;
}
