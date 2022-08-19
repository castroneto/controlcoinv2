import { Column, Model, Table, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { Withdrawal } from './Withdrawal';

@Table
export class Card extends Model<Card> {

    @Column
    name: string;

    @Column
    color: string;

    @Column
    expiration: Date;

    @HasMany(() => Withdrawal)
    players: Withdrawal[]

}