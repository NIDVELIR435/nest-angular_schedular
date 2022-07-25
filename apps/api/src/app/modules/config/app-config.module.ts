import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {DbConfig} from "@nest-angular/backend/src/app/modules/config/models/db.config";
import {AppConfigService} from "@nest-angular/backend/src/app/modules/config/app.config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [DbConfig, AppConfigService],
  exports: [DbConfig, AppConfigService],
})
export class AppConfigModule {}
