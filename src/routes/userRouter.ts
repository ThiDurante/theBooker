import { Router } from 'express';
import UserController from '../controller/UserController';
// import User from '../models/UserModel';

const userRouter = Router();

// const userModel = User;
const userController = new UserController();

userRouter.post('/', userController.createUser);

export default userRouter;
