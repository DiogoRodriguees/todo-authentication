import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import HttpModuleConfig from 'src/configs/HttpModuleConfig';
import { UserHttpGateway } from 'src/gateways/UserHttpGateway';

@Module({
  imports: [HttpModule.register(HttpModuleConfig)],
  providers: [UserHttpGateway],
  exports: [UserHttpGateway],
})
export class UserModule {}
