import { NextFunction, Request, Response } from 'express';
import Book from '../../database/models/BookModel';

export default interface IBookController {
  getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
  removeBook(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void>;
}
