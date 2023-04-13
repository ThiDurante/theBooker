import { Request, Response } from 'express';
import IBookService from '../services/interfaces/IBookService';
import IBookController from './interfaces/IBookController';
import { NextFunction } from 'express-serve-static-core';

export default class BookController implements IBookController {
  private _bookService: IBookService;
  constructor(bookService: IBookService) {
    this._bookService = bookService;
  }
  async getAll(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<Response | void> {
    const allBooks = await this._bookService.getAll();
    return res.status(200).json(allBooks);
  }

  async removeBook(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    const result = await this._bookService.removeBook(Number(id));
    if (result.message === 'Deleted') {
      return res.status(204).json({ message: 'Book successfully deleted' });
    }
    return res.status(400).json({ message: result.message });
  }
}
