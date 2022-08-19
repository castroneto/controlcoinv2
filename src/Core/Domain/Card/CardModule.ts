import { Module } from '@nestjs/common';

import { CardRepository } from './CardRepository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from 'src/Infrastructure/Database/Models/Card';

@Module({
  imports: [SequelizeModule.forFeature([Card])],
  providers: [CardRepository],
  exports: [CardRepository]
})
export class CardModule {}