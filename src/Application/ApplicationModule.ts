import { Module } from '@nestjs/common';
import { RegisterController } from './Controllers/User/RegisterController';
import { LoginController } from './Controllers/User/LoginController';
import { CoreModule } from '../Core/CoreModule';

@Module({
  imports: [CoreModule],
  providers: [],
  controllers: [RegisterController, LoginController]
})
export class ApplicationModule {}