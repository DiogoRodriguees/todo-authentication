import { Body, Controller, Get } from '@nestjs/common';
import { UserCredentials } from 'src/classes/dtos/UserCredentialsDTO';
import { AuthService } from 'src/services/AuthService';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/sign-in')
  async signIn(@Body() credentials: UserCredentials) {
    return await this.authService.signIn(credentials);
  }
}
