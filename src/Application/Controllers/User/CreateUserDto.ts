import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsEmail({}, { message: 'Invalid email message' })
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: number;

  @ApiProperty()
  name: string;
}