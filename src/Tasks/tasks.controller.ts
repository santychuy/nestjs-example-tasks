import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { Task } from './types';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Task {
    return { id, title: `Task ${id}`, description: `Description ${id}` };
  }

  @Post()
  create(@Body() task: CreateTaskDto): void {
    this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: UpdateTaskDto): string {
    return `Updating a task ${id}: ${task.title} ${task.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Deleting a task ${id}`;
  }
}
