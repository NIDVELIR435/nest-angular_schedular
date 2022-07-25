import { Column, Entity } from 'typeorm';
import {IntTimestampEntity} from "@nest-angular/backend/src/app/entities/utils/int-timestamp.entity";

@Entity('user')
export class User extends IntTimestampEntity {
  @Column({
    name: 'username',
    type: 'varchar',
    length: 500,
  })
  username: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 500,
  })
  name: string;

  @Column({
    name: 'mail',
    type: 'varchar',
    length: 500,
  })
  mail: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 500,
  })
  password: string;

  @Column({
    name: 'role',
    type: 'varchar',
    length: 500,
  })
  role: 'admin' | 'moderator' | 'visitor';
}
