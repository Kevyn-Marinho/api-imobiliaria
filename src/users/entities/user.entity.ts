import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User  {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  cpf: string;

  @Column('text')
  password: string;
  
  @Column()
  isAdmin: boolean;
}

