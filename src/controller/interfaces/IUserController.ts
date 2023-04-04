import { NextFunction, Request, RequestHandler, Response } from 'express';

export default interface IUserController {
  createUser(
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
