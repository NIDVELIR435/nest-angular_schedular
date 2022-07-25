import { PrimaryGeneratedColumn } from 'typeorm';
import {TimestampEntity} from "@nest-angular/backend/src/app/entities/utils/timestamp.entity";

export class IntTimestampEntity extends TimestampEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;
}
