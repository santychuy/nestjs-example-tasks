import { Module } from '@nestjs/common';

import { TasksController, TasksService } from './index';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
