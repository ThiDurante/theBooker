import * as nodemailer from 'nodemailer';
import envVar from '../env/envVar';

export default class Mailer {
  private user: string;
  private password: string;
  private transporter: nodemailer.Transporter;
  constructor() {
    this.user = envVar.EMAIL_USER;
    this.password = envVar.EMAIL_PASSWORD;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.user,
        pass: this.password,
      },
      tls: { rejectUnauthorized: false },
    });
    this.transporter = transporter;
  }
}
