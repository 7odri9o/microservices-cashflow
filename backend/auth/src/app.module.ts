import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from './config';
import { LoggerModule } from './logger';

@Module({
  imports: [ConfigModule, LoggerModule.forRootAsync()],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  onModuleInit() {
    this.logger.log('Initializing %s...', AppModule.name);
  }
}
