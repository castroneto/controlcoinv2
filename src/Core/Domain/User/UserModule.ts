import { Module } from '@nestjs/common';

import { UserRepository } from './UserRepository';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './../../../Infrastructure/Database/Models/User';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserModule {}