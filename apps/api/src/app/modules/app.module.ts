import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import {AppConfigModule} from "./config/app-config.module";
import {DbConfig} from "./config/models/db.config";
import * as Entities from '../entities/index'

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [AppConfigModule],
    inject: [DbConfig],
    useFactory: async (dbConfig: DbConfig): Promise<TypeOrmModuleOptions> => {
      const {
        database,
        password,
        username,
        port,
        host,
        logging,
        synchronize,
        serverEnv: name,
      } = dbConfig;

      return {
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        entities: Object.values(Entities),
        name,
        logging,
        synchronize,
        relationLoadStrategy: 'query',
      };
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
