import { Model, Optional } from 'sequelize';

interface IUserithId {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<IUserithId, 'id'> {}

export default interface UserModel
  extends Model<IUserithId, UserCreationAttributes>,
    IUserithId {
  createdAt?: Date;
  updatedAt?: Date;
}
