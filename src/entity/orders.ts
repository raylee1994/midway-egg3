import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Items } from './items';
import { User } from './user';

@Entity('orders')
export class Orders {
  @PrimaryColumn({
    type: 'int',
    nullable: false,
  })
  id: number;

  @OneToOne(() => Items)
  @JoinColumn({
    name: 'itemId',
    referencedColumnName: 'id',
  })
  item: Items;

  @Column({
    type: 'int',
    length: 11,
  })
  count: string;

  @OneToOne(() => User, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'uid',
    referencedColumnName: 'id',
  })
  user: User;

  @Column({
    type: 'enum',
    enum: ['0', '1'],
  })
  status: string;

  @Column({
    type: 'datetime',
  })
  endTime: string;
}
