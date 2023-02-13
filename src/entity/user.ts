import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn({
    type: 'int',
    nullable: false,
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @Index('indexName', { unique: true })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  expireJti: string;
}
