import { Inject, Injectable } from '@nestjs/common';
import { createTransport, SentMessageInfo, Transporter } from 'nodemailer';
import { MAILER_OPTIONS } from './constants/mailer-options.constant';
import { MailerOptions } from './interfaces/mailer-options.interface';
import { ISendMailOptions } from './interfaces/send-mail-options.interface';
import { TemplateAdapter } from './interfaces/template-adapter.interface';
const get = require('lodash.get');

@Injectable()
export class MailerService {
    private transporter: Transporter;

    constructor(@Inject(MAILER_OPTIONS) private readonly mailerOptions: MailerOptions) {
        if (!mailerOptions.transport || Object.keys(mailerOptions.transport).length <= 0) {
            throw new Error('Make sure to provide a nodemailer transport configuration object, connection url or a transport plugin instance.');
        }

        this.transporter = createTransport(this.mailerOptions.transport, this.mailerOptions.defaults);

        const templateAdapter: TemplateAdapter = get(this.mailerOptions, 'template.adapter');

        if (templateAdapter) {
            this.transporter.use('compile', (mail, callback) => {
                if (mail.data.html) {
                    return callback();
                }

                return templateAdapter.compile(mail, callback, this.mailerOptions);
            });
        }
    }

    public async sendMail(sendMailOptions: ISendMailOptions): Promise<SentMessageInfo> {
        return await this.transporter.sendMail(sendMailOptions);
    }
}
