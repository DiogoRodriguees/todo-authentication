import { Body, Controller, Get, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { UserCredentials } from 'src/classes/dtos/UserCredentialsDTO';
import { CredentialsSchema } from 'src/schemas/CredentialsSchema';
import { AuthService } from 'src/services/AuthService';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/sign-in')
  @UsePipes(new ZodValidationPipe(CredentialsSchema))
  async signIn(@Body() credentials: UserCredentials) {
    return await this.authService.signIn(credentials);
  }
}
