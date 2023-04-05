import { NextFunction, Request, RequestHandler, Response } from 'express';

export default interface IUserController {
  createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
  getAll(
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
  // removeUser(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response | void>
}

interface IUser {
  username: string;
  email: string;
  Password: string;
}

interface IUserId extends IUser {
  id: number;
}
