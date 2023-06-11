import * as cookieParser from 'cookie-parser';
import { createLogger } from 'winston';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { getLoggingConfig, WinstonLoggerService } from './logger';
import { ConfigService } from './config';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const loggingConfig = getLoggingConfig();
  const logger = new WinstonLoggerService(createLogger(loggingConfig));

  const app = await NestFactory.create(AppModule, {
    logger,
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);

  const { microserviceConfig } = configService
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: microserviceConfig.host,
      port: microserviceConfig.port
    },
  });
  app.flushLogs();
  app.use(cookieParser());
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
