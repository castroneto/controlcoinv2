import { CardService } from 'src/Core/ApplicationServices/CardService';
import { Module } from '@nestjs/common';
import { UserService } from './ApplicationServices/UserService';;
import { InfrastructureModule } from './../Infrastructure/InfrastructureModule';

import { UserModule } from './Domain/User/UserModule';
import { CardModule } from './Domain/Card/CardModule';

@Module({
  imports: [InfrastructureModule, UserModule, CardModule],
  providers: [UserService, CardService],
  exports: [UserService, CardService]
})
export class CoreModule {}