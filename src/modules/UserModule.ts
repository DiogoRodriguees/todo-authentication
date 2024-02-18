import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/UserEntity';
import { UserRepository } from 'src/repositories/UserRepository';
import { UserService } from 'src/services/UserService';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
