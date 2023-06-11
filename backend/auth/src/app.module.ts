import { Logger, MiddlewareConsumer, Module, NestModule, OnModuleInit, RequestMethod } from '@nestjs/common';
import { ConfigModule } from './config';
import { LoggerModule } from './logger';
import { AuthModule } from './auth';
import { UsersModule } from './users';
import { LoggerMiddleware } from './middlewares';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule, 
    LoggerModule.forRootAsync(),
  ],
})
export class AppModule implements NestModule, OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }

  onModuleInit() {
    this.logger.log('Initializing %s...', AppModule.name);
  }
}
