import { Router } from 'express';
import BookController from '../controller/BookController';
import BookService from '../services/BookService';
import BookDAL from '../DALayer/BookDAL';
import authMiddleware from '../middlewares/authMiddleware';

const bookRouter = Router();

const bookDAL = new BookDAL();
const bookService = new BookService(bookDAL);
const bookController = new BookController(bookService);

bookRouter.get('/', authMiddleware, bookController.getAll.bind(bookController));
bookRouter.post(
  '/',
  authMiddleware,
  bookController.create.bind(bookController)
);
bookRouter.delete(
  '/:id',
  authMiddleware,
  bookController.removeBook.bind(bookController)
);
bookRouter.patch(
  '/:id',
  authMiddleware,
  bookController.update.bind(bookController)
);
bookRouter.get(
  '/:id',
  authMiddleware,
  bookController.findById.bind(bookController)
);

export default bookRouter;
