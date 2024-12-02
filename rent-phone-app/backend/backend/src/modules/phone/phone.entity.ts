import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column('float')
  pricePerHour: number;

  @Column('float')
  pricePerDay: number;

  @Column({ default: true })
  available: boolean;
}
