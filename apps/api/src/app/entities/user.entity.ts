import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { DecorateAll } from '@nest-angular/backend/src/app/common/decorators';
import { IntTimestampEntity } from '@nest-angular/backend/src/app/entities/utils/int-timestamp.entity';

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
    name: 'first_name',
    type: 'varchar',
    length: 500,
  })
  firstName: string;

  @ApiProperty()
  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 500,
  })
  lastName: string;

  @ApiProperty()
  @Column({
    name: 'email',
    type: 'varchar',
    length: 500,
  })
  email: string;

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
