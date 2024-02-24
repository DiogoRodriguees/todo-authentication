import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import JwtModuleConfig from 'src/configs/JwtModuleConfig';
import { AuthModule } from './AuthModule';
import { DatabaseModule } from './DatabaseModule';
import { UserModule } from './UserModule';

@Module({
  imports: [ConfigModule.forRoot(), JwtModule.register(JwtModuleConfig), DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
