import { Column, Model, Table, HasOne, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table
export class User extends Model<User> {

  @Column
  profilePicture: string;

  @Column
  password: string;
  
  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: false })
  verified?: boolean;

  @Column({ defaultValue: true })
  isActive?: boolean;

  @Column({ defaultValue: false })
  blocked?: boolean;

  @BeforeCreate
  @BeforeUpdate
  static hashPassword(user: User) {
      if (user.password) {            
          var salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
      }
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
  

}
