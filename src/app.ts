import * as express from 'express';
import userRouter from './routes/userRouter';
import sequelizeCon from './database/config/connection';
import User from './database/models/UserModel';
import 'dotenv/config';
import usersSeed from './database/seeders/users';
import bookSeed from './database/seeders/books';
import Book from './database/models/BookModel';
import errorMiddleware from './middlewares/errorMiddleware';
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
    this.app.get('/user', () => console.log('Its working'));
    this.app.use(errorMiddleware);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, async () => {
      await sequelizeCon.sync();
      await this.seed();
      console.log(`Listening on port: ${PORT}`);
    });
  }

  private async seed(): Promise<void> {
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'development') {
      const users = await User.findAll();
      if (users.length < 1) {
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
      } else {
        console.log('DB already populated');
      }
    }
  }
}

export { App };
