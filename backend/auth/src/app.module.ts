import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from './config';
import { LoggerModule } from './logger';
import { AuthModule } from './auth';
import { UsersModule } from './users';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule, 
    LoggerModule.forRootAsync(),
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  onModuleInit() {
    this.logger.log('Initializing %s...', AppModule.name);
  }
}
