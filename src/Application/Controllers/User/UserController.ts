import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './CreateUserDto';

import { UserService } from '../../../Core/ApplicationServices/UserService';

@Controller('authentication')
export class UserController {
    constructor(public userService: UserService) { }

    @Post('login')
    async login(): Promise<string> {
        try {
            await this.userService.Autentication({ email: 'castrinhodopapoko@gmail.com', password: "ass"})
        } catch (error) {
            return error;
        }

        return "login"
    }


    @Post('register')
    @ApiResponse({ status: 400, description: 'Invalid email message.' })
    register(@Body() createUserDto: CreateUserDto): string {
        return "register"
    }
}
