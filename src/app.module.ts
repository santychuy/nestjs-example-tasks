import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import helmet from 'helmet';

import { LoggerMiddleware } from './middlewares/logger';

import { TasksModule } from './Tasks';

@Module({
  imports: [TasksModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet, LoggerMiddleware).forRoutes('*');
  }
}
