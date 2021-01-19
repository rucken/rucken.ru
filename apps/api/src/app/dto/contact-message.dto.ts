import { plainToClassFromExist } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator-multi-lang';

export class ContactMessageDto {
  @IsNotEmpty()
  @MaxLength(255)
  username: string = undefined;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string = undefined;

  @IsNotEmpty()
  @MaxLength(4000)
  message: string = undefined;

  constructor(data?: Partial<ContactMessageDto>) {
    plainToClassFromExist(this, data);
  }
}
