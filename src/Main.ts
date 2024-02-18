import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/AppModule';

async function Main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
Main();
