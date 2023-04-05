import { Router } from 'express';
import UserController from '../controller/UserController';
import UserService from '../services/UserService';
import UserDAL from '../DALayer/UserDAL';
import errorMiddleware from '../middlewares/errorMiddleware';
// import User from '../models/UserModel';

const userRouter = Router();

const userDAL = new UserDAL();
const userService = new UserService(userDAL);
const userController = new UserController(userService);

userRouter
  .post('/login', errorMiddleware, userController.login.bind(userController))
  .post('/', errorMiddleware, userController.createUser.bind(userController))
  .get('/', errorMiddleware, userController.getAll.bind(userController));

export default userRouter;