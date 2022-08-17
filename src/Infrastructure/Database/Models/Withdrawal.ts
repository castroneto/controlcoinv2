import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';
import { Card } from './Card';

@Table
export class Withdrawal extends Model {

    @Column
    name: string;

    @Column({ defaultValue: true })
    debt: boolean;

    @Column(DataType.FLOAT)
    price: number;

    @Column
    amount: number;

    @Column({ defaultValue: false })
    payment_slip: boolean; 

    @ForeignKey(() => Card)
    @Column
    card_id: number
    
}