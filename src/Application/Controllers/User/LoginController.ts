import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiResponse,ApiParam } from '@nestjs/swagger';
import { LoginRequestDto, LoginResponseDto } from '../../DTOs/User/LoginDto';
import { UserService } from '../../../Core/ApplicationServices/UserService';
import { JwtAuthGuard } from '../../Guard/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('login')
export class LoginController {
    constructor(public userService: UserService) { }

    @Post()
    async register(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
        try {
            return await this.userService.Autentication(body)
        } catch (error) {
            return error;
        }
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    async test(@Request() req: any) {
        console.log(req.user)
      return 'Success!';
    }
    
}
