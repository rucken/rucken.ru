import { Body, Controller, Post, Req } from '@nestjs/common';
import { config } from '../config';
import { ContactMessageDto } from '../dto/contact-message.dto';
import { MailerService } from '../modules/mailer';

@Controller('/contact')
export class ContactController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async send(@Req() req, @Body() contactMessageDto: ContactMessageDto) {
    try {
      const subject = `[${config.project.title}] Message from contact form`;
      await this.mailerService.sendMail({
        to: config.mailer.users.admin.email,
        from: config.mailer.users.robot.email,
        subject,
        template: 'contact-form',
        context: {
          subject,
          ...contactMessageDto,
        },
      });
      return {
        message: 'Message sent successfully!',
      };
    } catch (error) {
      throw error;
    }
  }
}
