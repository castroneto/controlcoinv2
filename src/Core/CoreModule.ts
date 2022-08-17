import { Module } from '@nestjs/common';
import { UserService } from './ApplicationServices/UserService';;
import { InfrastructureModule } from './../Infrastructure/InfrastructureModule';

import { UserModule } from './Domain/User/UserModule';

@Module({
  imports: [InfrastructureModule, UserModule],
  providers: [UserService],
  exports: [UserService]
})
export class CoreModule {}