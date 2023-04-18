import * as express from 'express';
import userRouter from './routes/userRouter';
import sequelizeCon from './database/config/connection';
import User, { UserAttributes } from './database/models/UserModel';
import 'dotenv/config';
import usersSeed from './database/seeders/users';
import bookSeed from './database/seeders/books';
import Book from './database/models/BookModel';
import errorMiddleware from './middlewares/errorMiddleware';
import encryptPassword from './utils/encryptPassword';
import bookRouter from './routes/bookRouter';
class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // set middlewares and routers
    this.app.use(express.json());
    this.app.use('/user', userRouter);
    this.app.use('/books', bookRouter);
    this.app.use(errorMiddleware);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, async () => {
      try {
        await sequelizeCon.sync();
      } catch (error) {
        console.log(error);
      }
      await this.seed();
      console.log(`Listening on port: ${PORT}`);
    });
  }

  private async seed(): Promise<void> {
    console.log(process.env.NODE_ENV);
    usersSeed.map((user) => {
      user.password = encryptPassword(user as UserAttributes);
    });

    if (process.env.NODE_ENV === 'development') {
      const users = await User.findAll();
      if (users.length < 1) {
        console.log('DB is being populated, please wait');
        await Promise.all(bookSeed.map((book) => Book.create(book)));
        await Promise.all(
          usersSeed.map((userSeed) => {
            User.create(userSeed).then(async (userCreated) =>
              (await Book.findAll()).map((bookDB) => {
                if (userSeed.books.includes(bookDB.id as number)) {
                  userCreated.$add('books', bookDB);
                }
              })
            );
          })
        );
        console.log('DB has been populated :)');
      } else {
        console.log('DB already populated');
      }
    }
  }
}

export { App };
