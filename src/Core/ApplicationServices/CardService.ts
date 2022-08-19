import { CardRepository } from './../Domain/Card/CardRepository';
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ICard } from "../Domain/Card/CardInterface";

@Injectable()
export class CardService {

    constructor(public cardRepository: CardRepository) {

    }


    async CreateCard(card: ICard){
        this.cardRepository.createCard(card);
    }
     
}