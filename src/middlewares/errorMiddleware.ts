import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response | void => {
  if (error.message === 'invalid token')
    return res.status(500).json({ error: 'Your token is invalid!' });
  return res.status(500).json({ error: error.message });
};

export default errorMiddleware;
