import { ContactMessageDto } from '../dto/contact-message.dto';
import { MailerService } from '../modules/mailer';
export declare class ContactController {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    send(req: any, contactMessageDto: ContactMessageDto): Promise<{
        message: string;
    }>;
}
