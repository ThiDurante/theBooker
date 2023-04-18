import { SignOptions } from 'jsonwebtoken';
import envVar from '../env/envVar';
import * as jwt from 'jsonwebtoken';
import { UserAttributes } from '../database/models/UserModel';

export default class Jwt {
  private readonly _secret = envVar.JWT_SECRET as string;

  public generateToken(user: UserAttributes): string {
    const options: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '1d',
    };
    return jwt.sign(user, this._secret, options);
  }

  public decode(token: string): UserAttributes {
    return jwt.verify(token, this._secret) as UserAttributes;
  }
}
