import IBookService from './interfaces/IBookService';
import IBookDal from '../DALayer/interfaces/IBookDAL';
import Book, { BookAttributes } from '../database/models/BookModel';
import Validations from '../classes/Validation';

export default class BookService implements IBookService {
  private _bookDAL: IBookDal;
  constructor(bookDAL: IBookDal) {
    this._bookDAL = bookDAL;
  }
  async getAll(): Promise<Book[]> {
    const allBooks = await this._bookDAL.getAll();
    return allBooks;
  }

  async removeBook(id: number): Promise<{ message: string }> {
    const checkBookExists = await this._bookDAL.findById(id);
    if (checkBookExists) {
      await this._bookDAL.removeBook(id);
      return { message: 'Deleted' };
    }
    throw new Error('Book not found');
  }

  async create(
    book: BookAttributes
  ): Promise<{ message: string; book: BookAttributes }> {
    Validations.bookValidation(book);
    const createdBook = await this._bookDAL.create(book);
    return { message: 'Book successfully created', book: createdBook };
  }

  async update(
    id: number,
    book: BookAttributes
  ): Promise<{ message: string; book: BookAttributes }> {
    Validations.bookValidation(book);

    const createdBook = await this._bookDAL.update(id, book);
    console.log(createdBook);

    return { message: 'Book successfully updated', book: createdBook };
  }

  async findById(id: number): Promise<BookAttributes> {
    const book = await this._bookDAL.findById(id);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }
}
