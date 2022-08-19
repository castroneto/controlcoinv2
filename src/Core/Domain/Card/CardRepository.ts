import { Injectable, Type } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './../../../Infrastructure/Database/Models/Card';
import { ICard } from "./CardInterface";

@Injectable()
export class CardRepository {

  constructor(
    @InjectModel(Card)
    private cardModel: typeof Card,
  ) { }

  async findAll(): Promise<Card[]> {
    return this.cardModel.findAll();
  }

  findOne(id: string): Promise<Card> {
    return this.cardModel.findOne({ where: { id } });
  }

  findName(name: string): Promise<Card> {
    return this.cardModel.findOne({ where: { name } });
  }

  findColor(color: string): Promise<Card> {
    return this.cardModel.findOne({ where: { color } });
  }

  async createCard(card: ICard): Promise<Card> {
    return this.cardModel.create(card);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

}