import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class CardRequestDto {

  @IsNumber()
  @ApiProperty()
  expiration: Date;

  @IsString()
  @ApiProperty()
  color: string;

  @IsString()
  @ApiProperty()
  name: string;

}

export class CardResponseDto {
  @IsNumber()
  @ApiProperty()
  expiration: Date;

  @IsString()
  @ApiProperty()
  color: string;

  @IsString()
  @ApiProperty()
  name: string;

}