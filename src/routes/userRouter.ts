import { Router } from 'express';
import UserController from '../controller/UserController';
import UserService from '../services/UserService';
import UserDAL from '../DALayer/UserDAL';
import authMiddleware from '../middlewares/authMiddleware';
import emailAuthMiddleware from '../middlewares/emailAuthMiddleware';
// import User from '../models/UserModel';

const userRouter = Router();

const userDAL = new UserDAL();
const userService = new UserService(userDAL);
const userController = new UserController(userService);

userRouter
  .post('/login', userController.login.bind(userController))
  .post('/', userController.insert.bind(userController))
  .patch('/verifiedemail', userController.verifyEmail.bind(userController))
  .get('/verifiedemail', userController.emailToken.bind(userController))
  .get(
    '/',
    authMiddleware,
    emailAuthMiddleware,
    userController.getAll.bind(userController)
  )
  .delete('/:id', authMiddleware, userController.remove.bind(userController))
  .get('/:id', authMiddleware, userController.findById.bind(userController));

export default userRouter;
