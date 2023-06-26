import { Injectable } from '@nestjs/common';

import { Task } from './types';

@Injectable()
export class TasksService {
  // Local only for now, later we will use a database
  private readonly tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(task: Task) {
    this.tasks.push(task);
  }
}
