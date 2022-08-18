import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse,ApiParam } from '@nestjs/swagger';
import { RegisterRequestDto, RegisterResponseDto } from '../../DTOs/User/RegisterDto';
import { UserService } from '../../../Core/ApplicationServices/UserService';


@Controller('register')
export class RegisterController {
    constructor(public userService: UserService) { }

    @Post()
    @ApiResponse({ status: 400, description: 'Invalid email message.' })
    async register(@Body() body: RegisterRequestDto): Promise<RegisterResponseDto> {
        try {
            await this.userService.Register(body)
        } catch (error) {
            return error;
        }
    }
    
}
