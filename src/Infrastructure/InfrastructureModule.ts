import { Module } from '@nestjs/common';
import { Encryption } from './Encryption/Encryption';

@Module({
  providers: [Encryption],
  exports: [Encryption]
})
export class InfrastructureModule {}