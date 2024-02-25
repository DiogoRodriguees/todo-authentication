import { NestFactory } from '@nestjs/core';
import { MailModule } from './modules/MainModule';

async function Main() {
  const app = await NestFactory.create(MailModule);
  await app.listen(process.env.PORT || 3000);
}
Main();
