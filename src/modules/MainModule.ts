import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import JwtModuleConfig from 'src/configs/JwtModuleConfig';
import { AuthModule } from './AuthModule';
import { UserModule } from './UserModule';

@Module({ imports: [ConfigModule.forRoot(), JwtModule.register(JwtModuleConfig), UserModule, AuthModule] })
export class MailModule {}
