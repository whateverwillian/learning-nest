import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import loggerMiddleware from './middlewares/logger';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware).forRoutes('cats');
  }
}
