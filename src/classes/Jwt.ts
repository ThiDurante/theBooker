import { SignOptions } from 'jsonwebtoken';
import envVar from '../env/envVar';
import * as jwt from 'jsonwebtoken';
interface JwtPayload {
  id: number;
  username: string;
  role: string;
  email: string;
}

export default class Jwt {
  private readonly _secret = envVar.JWT_SECRET as string;

  public generateToken(user: JwtPayload): string {
    const options: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '1d',
    };
    return jwt.sign(user, this._secret, options);
  }

  public decode(token: string): JwtPayload {
    return jwt.verify(token, this._secret) as JwtPayload;
  }
}
