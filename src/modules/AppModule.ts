import { Module } from '@nestjs/common';
import { AuthModule } from './AuthModule';
import { DatabaseModule } from './DatabaseModule';
import { UserModule } from './UserModule';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
