import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserCredentials } from 'src/classes/dtos/UserCredentialsDTO';
import { UserService } from './UserService';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(credentials: UserCredentials): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(credentials.email);
    if (user?.password !== credentials.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
