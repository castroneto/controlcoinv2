import { Module } from '@nestjs/common';
import { RegisterController } from './Controllers/User/RegisterController';
import { LoginController } from './Controllers/User/LoginController';
import { CoreModule } from '../Core/CoreModule';
import { CardController } from './Controllers/Card/CardController';

@Module({
  imports: [CoreModule],
  providers: [],
  controllers: [RegisterController, LoginController, CardController]
})
export class ApplicationModule {}