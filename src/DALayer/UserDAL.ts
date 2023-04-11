import { userLogin } from '../services/interfaces/IUserService';
import User, { UserAttributes } from '../database/models/UserModel';
import IUserDAL from './interfaces/IUserDAL';
import Book from '../database/models/BookModel';

export default class UserDAL implements IUserDAL {
  async getByEmail(userLogin: userLogin): Promise<UserAttributes | null> {
    const findUser = await User.findOne({
      where: [{ email: userLogin.email }],
      include: Book,
    });
    if (findUser) {
      return findUser.dataValues;
    }
    return null;
  }

  async getAll(): Promise<User[]> {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      include: Book,
    });
    return users;
  }

  async insert(user: UserAttributes): Promise<UserAttributes> {
    await Promise.all(
      await User.create(user).then(async (userCreated) =>
        (
          await Book.findAll()
        ).map((bookDB) => {
          if (user.books.includes(bookDB.id as number)) {
            userCreated.$add('books', bookDB);
          }
        })
      )
    );
    const newUser = await User.findOne({
      where: { email: user.email },
      include: Book,
    });

    return newUser?.dataValues as User;
  }

  async findById(id: number): Promise<UserAttributes | null> {
    const user = await User.findOne({ where: { id }, include: Book });
    if (!user) return null;
    return user.dataValues;
  }

  async remove(id: number): Promise<void> {
    await User.destroy({ where: { id } });
  }
}

// const user = await User.findAll({ include: Book });
