import { Router } from 'express';
import BookController from '../controller/BookController';
import BookService from '../services/BookService';
import BookDAL from '../DALayer/BookDAL';

const bookRouter = Router();

const bookDAL = new BookDAL();
const bookService = new BookService(bookDAL);
const bookController = new BookController(bookService);

bookRouter.get('/', bookController.getAll.bind(bookController));

export default bookRouter;
