import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/AuthController';
import { AuthService } from 'src/services/AuthService';
import { UserModule } from './UserModule';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
