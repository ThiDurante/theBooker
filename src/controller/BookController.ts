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
    _req: Request,
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
  }

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const createdBook = await this._bookService.create(req.body);
      return res.status(201).json(createdBook);
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const updatedBook = await this._bookService.update(Number(id), req.body);
      return res.status(201).json(updatedBook);
    } catch (error) {
      next(error);
    }
  }

  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const book = await this._bookService.findById(Number(id));
      return res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }
}
