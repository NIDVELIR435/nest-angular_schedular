import { Module } from '@nestjs/common';

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from '@nest-angular/backend/src/app/modules/app.controller';
import { AppConfigModule } from '@nest-angular/backend/src/app/modules/config/app-config.module';
import { DbConfig } from '@nest-angular/backend/src/app/modules/config/models/db.config';
import * as Entities from '@nest-angular/backend/src/app/entities/index';
import { AppService } from '@nest-angular/backend/src/app/modules/app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
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
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
