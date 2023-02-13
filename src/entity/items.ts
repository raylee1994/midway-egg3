import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('items')
export class Items {
  @PrimaryColumn({
    type: 'int',
    nullable: false,
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'int',
    length: 11,
  })
  price: number;

  @Column({
    type: 'int',
    length: 11,
  })
  count: number;

  @Column({
    type: 'enum',
    enum: ['0', '1'],
  })
  status: string;
}
