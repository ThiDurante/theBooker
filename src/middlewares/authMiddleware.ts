import { NextFunction, Request, Response } from 'express';
import Jwt from '../classes/Jwt';

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const jwt = new Jwt();
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.decode(token);
    req.body.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
