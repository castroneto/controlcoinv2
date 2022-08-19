import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CardRequestDto {

  @IsString()
  @ApiProperty()
  expiration: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  color: string;

  @IsString()
  @ApiProperty()
  name: string;

}

export class CardResponseDto {
  @IsNumber()
  @ApiProperty()
  expiration: string;

  @IsString()
  @ApiProperty()
  color: string;

  @IsString()
  @ApiProperty()
  name: string;

}