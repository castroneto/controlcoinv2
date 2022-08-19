import { CardRepository } from './../Domain/Card/CardRepository';
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Encryption } from '../../Infrastructure/Encryption/Encryption';
import { ICard } from "../Domain/Card/CardInterface";

@Injectable()
export class CardService {

    constructor(public encryption: Encryption, public cardRepository: CardRepository) {

    }

    async CreateCard(card: ICard){
        this.cardRepository.createCard(card);

        let colorVerify = await this.cardRepository.findColor(card.color);
        let query =  await this.cardRepository.findName(card.name);
        if(query) {
            throw new HttpException({ status: HttpStatus.AMBIGUOUS, error: 'Existing name and card' }, HttpStatus.AMBIGUOUS);
        }

        if(colorVerify) {
            throw new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'color should not be empty' }, HttpStatus.BAD_REQUEST);
        }
        
    }
     
}