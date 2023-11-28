import { IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsUrl()
  imgUrl: string;

  @IsString()
  password: string;
}
