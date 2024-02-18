import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/UserRepository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
