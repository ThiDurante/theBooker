import Book from '../../database/models/BookModel';

export default interface IBookService {
  getAll(): Promise<Book[]>;
  removeBook(id: number): Promise<{ message: string }>;
}
