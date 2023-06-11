import { createLogger } from 'winston';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getLoggingConfig, WinstonLoggerService } from './logger';

async function bootstrap() {
  const loggingConfig = getLoggingConfig();
  const logger = new WinstonLoggerService(createLogger(loggingConfig));

  const app = await NestFactory.create(AppModule, {
    logger,
    bufferLogs: true,
  });
  app.flushLogs();
  await app.listen(3000);
}
bootstrap();
