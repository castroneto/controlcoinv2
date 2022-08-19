import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse,ApiParam } from '@nestjs/swagger';
import { CardRequestDto, CardResponseDto } from '../../DTOs/Card/CardDto';
import { UserService } from '../../../Core/ApplicationServices/UserService';
import { CardService } from 'src/Core/ApplicationServices/CardService';


@Controller('CreateCard')
export class  CardController{
    constructor(public cardService: CardService) { }

    @Post()
    async createCard(@Body() body: CardRequestDto): Promise<CardResponseDto> {
        try {
            await this.cardService.CreateCard(body)
            //await this.cardService.Autentication(body)
        } catch (error) {
            return error;
        }
    }
    
}
