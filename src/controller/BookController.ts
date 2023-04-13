import { Request, Response } from 'express';
import IBookService from '../services/interfaces/IBookService';
import IBookController from './interfaces/IBookController';
import { NextFunction } from 'express-serve-static-core';
import Book from '../database/models/BookModel';

export default class BookController implements IBookController {
  private _bookService: IBookService;
  constructor(bookService: IBookService) {
    this._bookService = bookService;
  }
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const allBooks = await this._bookService.getAll();
    return res.status(200).json(allBooks);
  }
}
