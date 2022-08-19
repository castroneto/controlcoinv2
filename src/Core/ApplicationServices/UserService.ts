import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { UserRepository } from '../Domain/User/UserRepository';
import { IUser } from "../Domain/User/UserInterface";

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(public userRepository: UserRepository, private jwtService: JwtService) {

    }


    async getUser(id) {
        return await this.userRepository.findOne(id);
    }

    async Autentication({ email, password }) {
        let user = await this.userRepository.findByEmail(email);
        if(!user) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user not Found' }, HttpStatus.UNAUTHORIZED);
        }

        const isMatch = await user.validatePassword(password);
        if(!isMatch) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'incorrect password' }, HttpStatus.UNAUTHORIZED);
        }


        if(user.blocked) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user blocked' }, HttpStatus.UNAUTHORIZED);
        }


        if(!user.isActive) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user inactive' }, HttpStatus.UNAUTHORIZED);
        }

        const payload = { username: user.email, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
        };

    }

    async Register(user: IUser){
        let query = await this.userRepository.findByEmail(user.email);
        if(query) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user arealy esixts' }, HttpStatus.UNAUTHORIZED);
        }
        this.userRepository.createUser(user)
    }

    async RecoveryPassword() {

    }

    async ValidateEmail() {

    }
     
}