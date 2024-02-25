import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { UserEntity } from 'src/entities/UserEntity';

@Injectable()
export class UserHttpGateway {
  constructor(private readonly httpService: HttpService) {}

  async getUserByEmail(email: string) {
    const requestParams = {
      headers: { clientId: process.env.CLIENT_ID },
      params: { email: email },
    };

    const { data } = await firstValueFrom(
      this.httpService.get<UserEntity>(process.env.USER_URL as string, requestParams).pipe(
        catchError((error: AxiosError) => {
          Logger.error(error.response.data);
          throw new BadRequestException('Get user failed');
        }),
      ),
    );

    return data;
  }
}
