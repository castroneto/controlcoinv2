import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Encryption } from '../../Infrastructure/Encryption/Encryption';
import { UserRepository } from '../Domain/User/UserRepository';

@Injectable()
export class UserService {

    constructor(public encryption: Encryption, public userRepository: UserRepository) {

    }

    async Autentication({ email, password }) {
        let user = await this.userRepository.findByEmail(email);
        if(!user) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user not Found' }, HttpStatus.UNAUTHORIZED);
        }

        let isValid = await this.encryption.CompareHashes(password, user.password);
        if(!isValid) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'incorrect password' }, HttpStatus.UNAUTHORIZED);
        }

    }

    async Register(){

    }

    async RecoveryPassword() {

    }

    async ValidateEmail() {

    }
     
}