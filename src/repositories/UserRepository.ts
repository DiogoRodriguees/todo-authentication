import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/UserEntity';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
