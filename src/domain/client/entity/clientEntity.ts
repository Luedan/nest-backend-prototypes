import { AutoMap } from '@automapper/classes';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'clients' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  declare id: number;

  @Column()
  @AutoMap()
  declare name: string;

  @Column({
    default: 1,
  })
  @AutoMap()
  declare state: number;
}
