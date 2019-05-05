import { SentMessageInfo } from 'nodemailer';
import { MailerOptions } from './interfaces/mailer-options.interface';
import { ISendMailOptions } from './interfaces/send-mail-options.interface';
export declare class MailerService {
    private readonly mailerOptions;
    private transporter;
    constructor(mailerOptions: MailerOptions);
    sendMail(sendMailOptions: ISendMailOptions): Promise<SentMessageInfo>;
}
