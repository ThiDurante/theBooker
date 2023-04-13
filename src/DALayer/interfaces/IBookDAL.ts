import Book from '../../database/models/BookModel';

export default interface IBookDal {
  getAll(): Promise<Book[]>;
}
