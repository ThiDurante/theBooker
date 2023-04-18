import { NextFunction, Request, Response } from 'express';
import Jwt from '../classes/Jwt';

const emailAuthMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
): Response | void => {
  try {
    console.log(req.body.user);

    if (req.body.user.emailVerified) return next();
    throw new Error('Email not verified');
  } catch (error) {
    next(error);
  }
};

export default emailAuthMiddleware;
