import Book, { BookAttributes } from '../../database/models/BookModel';

export default interface IBookService {
  getAll(): Promise<Book[]>;
  removeBook(id: number): Promise<{ message: string }>;
  create(
    book: BookAttributes
  ): Promise<{ message: string; book: BookAttributes }>;
  update(
    id: number,
    book: BookAttributes
  ): Promise<{ message: string; book: BookAttributes }>;
}
