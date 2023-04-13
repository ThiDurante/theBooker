import { where } from 'sequelize';
import Book, { BookAttributes } from '../database/models/BookModel';
import IBookDal from './interfaces/IBookDAL';

export default class BookDAL implements IBookDal {
  async getAll(): Promise<Book[]> {
    const allBooks = await Book.findAll();
    return allBooks;
  }
  async findById(id: number): Promise<BookAttributes | null> {
    const book = await Book.findByPk(id);
    return book;
  }
  async removeBook(id: number): Promise<void> {
    await Book.destroy({ where: { id } });
  }

  async create(book: BookAttributes): Promise<BookAttributes> {
    const createdBook = await Book.create(book);
    return createdBook;
  }

  async update(id: number, book: BookAttributes): Promise<BookAttributes> {
    await Book.update(book, { where: { id } });
    return { id, ...book };
  }
}
