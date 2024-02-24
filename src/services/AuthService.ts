import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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
    const saltOrRounds = Number(process.env.SALT);
    const hash = await bcrypt.hash(credentials.password, saltOrRounds);
    const isMatch = await bcrypt.compare(credentials.password, hash);

    if (!isMatch) throw new UnauthorizedException();
    const payload = { id: user.id, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
