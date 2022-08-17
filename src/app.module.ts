import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

import { ApplicationModule } from './Application/ApplicationModule';
import { InfrastructureModule } from './Infrastructure/InfrastructureModule';
import { CoreModule } from './Core/CoreModule';

@Module({
  imports: [
    ApplicationModule,
    InfrastructureModule,
    CoreModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'controlcoin_user',
      password: 'An0thrS3crt',
      database: 'controlcoin_db',
      models: [join(__dirname, 'Infrastructure/Database/Models/', '*.{ts,js}')],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
