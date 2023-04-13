import Book, { BookAttributes } from '../../database/models/BookModel';

export default interface IBookDal {
  getAll(): Promise<Book[]>;
  findById(id: number): Promise<BookAttributes | null>;
  removeBook(id: number): Promise<void>;
  create(book: BookAttributes): Promise<BookAttributes>;
  update(id: number, book: BookAttributes): Promise<BookAttributes>;
}
