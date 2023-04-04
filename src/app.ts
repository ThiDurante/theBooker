import * as express from 'express';
import userRouter from './routes/userRouter';

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
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  }
}

export { App };
