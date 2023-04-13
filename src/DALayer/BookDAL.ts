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
}
