import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Encryption } from '../../Infrastructure/Encryption/Encryption';
import { UserRepository } from '../Domain/User/UserRepository';
import { IUser } from "../Domain/User/UserInterface";
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


        if(user.blocked) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user blocked' }, HttpStatus.UNAUTHORIZED);
        }


        if(!user.isActive) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user inactive' }, HttpStatus.UNAUTHORIZED);
        }


    }

    async Register(user: IUser){
        let query = await this.userRepository.findByEmail(user.email);
        if(query) {
            throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: 'user arealy esixts' }, HttpStatus.UNAUTHORIZED);
        }

        user.password = await this.encryption.EncryptPassword(user.password);

        this.userRepository.createUser(user)
    }

    async RecoveryPassword() {

    }

    async ValidateEmail() {

    }
     
}