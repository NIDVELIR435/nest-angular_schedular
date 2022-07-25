import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {DecorateAll} from "@nest-angular/backend/src/app/common/decorators";
import {IntTimestampEntity} from "@nest-angular/backend/src/app/entities/utils/int-timestamp.entity";

@Entity('user')
@DecorateAll([ApiProperty()])
export class User extends IntTimestampEntity {
  @ApiProperty()
  @Column({
    name: 'username',
    type: 'varchar',
    length: 500,
  })
  username: string;

  @ApiProperty()
  @Column({
    name: 'name',
    type: 'varchar',
    length: 500,
  })
  name: string;

  @ApiProperty()
  @Column({
    name: 'mail',
    type: 'varchar',
    length: 500,
  })
  mail: string;

  @ApiProperty()
  @Column({
    name: 'password',
    type: 'varchar',
    length: 500,
  })
  password: string;

  @ApiProperty()
  @Column({
    name: 'role',
    type: 'varchar',
    length: 500,
  })
  role: 'admin' | 'moderator' | 'visitor';
}
