import IBookService from './interfaces/IBookService';
import IBookDal from '../DALayer/interfaces/IBookDAL';
import Book from '../database/models/BookModel';

export default class BookService implements IBookService {
  private _bookDAL: IBookDal;
  constructor(bookDAL: IBookDal) {
    this._bookDAL = bookDAL;
  }
  async getAll(): Promise<Book[]> {
    const allBooks = await this._bookDAL.getAll();
    return allBooks;
  }
}
