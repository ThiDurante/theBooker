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
      auth: {
        user: this.user,
        pass: this.password,
      },
    });
    this.transporter = transporter;
  }

  public sendMail = async (
    to: string,
    subject: string,
    body: string
  ): Promise<void> => {
    const mailOptions = {
      from: this.user,
      to,
      subject,
      html: body,
    };
    try {
      console.log(to, subject, body);

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
    }
  };
}
