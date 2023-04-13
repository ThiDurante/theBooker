import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response | void => {
  if (error.message === 'invalid token')
    return res.status(401).json({ error: 'Your token is invalid!' });
  if (error.message.includes('required'))
    return res.status(422).json({ error: error.message });
  if (error.message.includes('found'))
    return res.status(404).json({ error: error.message });
  return res.status(501).json({ error: error.message });
};

export default errorMiddleware;
