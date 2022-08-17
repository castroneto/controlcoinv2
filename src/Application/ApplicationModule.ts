import { Module } from '@nestjs/common';
import { UserController } from './Controllers/User/UserController';
import { CoreModule } from '../Core/CoreModule';

@Module({
  imports: [CoreModule],
  providers: [],
  controllers: [UserController]
})
export class ApplicationModule {}