import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse,ApiParam } from '@nestjs/swagger';
import { LoginRequestDto, LoginResponseDto } from '../../DTOs/User/LoginDto';
import { UserService } from '../../../Core/ApplicationServices/UserService';


@Controller('login')
export class LoginController {
    constructor(public userService: UserService) { }

    @Post()
    async register(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
        try {
            await this.userService.Autentication(body)
        } catch (error) {
            return error;
        }
    }
    
}
