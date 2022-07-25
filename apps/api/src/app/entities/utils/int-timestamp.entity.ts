import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {TimestampEntity} from "@nest-angular/backend/src/app/entities/utils/timestamp.entity";

export class IntTimestampEntity extends TimestampEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;
}
