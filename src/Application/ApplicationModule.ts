import { Module } from '@nestjs/common';
import { RegisterController } from './Controllers/User/RegisterController';
import { LoginController } from './Controllers/User/LoginController';
import { CoreModule } from '../Core/CoreModule';
import { CardController } from './Controllers/Card/CardController';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    CoreModule,
    JwtModule.register({
      secret: 'abcdABCD1234554321',
      signOptions: {
        expiresIn: 3600,
      },
    })
  ],
  providers: [JwtStrategy],
  controllers: [RegisterController, LoginController, CardController]
})
export class ApplicationModule { }