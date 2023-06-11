import { DynamicModule, Global, Module } from '@nestjs/common';
import { createLoggerProviders } from './logger.internal';

@Global()
@Module({})
export class LoggerModule {
  static async forRootAsync(): Promise<DynamicModule> {
    const dynamicProviders = await createLoggerProviders();

    return {
      module: LoggerModule,
      providers: [...dynamicProviders],
      exports: [...dynamicProviders],
    };
  }
}
