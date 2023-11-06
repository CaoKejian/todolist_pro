import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

// validate 为接受字段校验器
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['1', '2'])
  select: string;

  @IsEmail()
  @IsString()
  input: string;
}
