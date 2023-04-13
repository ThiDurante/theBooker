import Book from '../database/models/BookModel';
import IBookDal from './interfaces/IBookDAL';

export default class BookDAL implements IBookDal {
  async getAll(): Promise<Book[]> {
    const allBooks = await Book.findAll();
    return allBooks;
  }
}
