import { Column, Model, Table, HasOne } from 'sequelize-typescript';

@Table
export class User extends Model {

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
  verified: boolean;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column({ defaultValue: false })
  blocked: boolean;

  

}
