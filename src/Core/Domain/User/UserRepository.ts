import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { User } from './../../../Infrastructure/Database/Models/User';
import { IUser } from './UserInterface';
@Injectable()
export class UserRepository {

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}
    
      async findAll(): Promise<User[]> {
        return this.userModel.findAll();
      }
    
      findOne(id: string): Promise<User> {
        return this.userModel.findOne({ where: { id } });
      }

      findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ where: { email } });
      }

      async createUser(user: IUser) : Promise<User> {
          return this.userModel.create(user);
      }
      
      async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
      }

}