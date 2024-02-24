import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/UserRepository';
import { IsNull } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(email: string) {
    const user = await this.userRepository.findOne({ where: { email: email, deletedAt: IsNull() } });
    if (!user) throw new NotFoundException('Email não cadastrado');
    return user;
  }
}
