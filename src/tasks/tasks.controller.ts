import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body('title') title:string, @Body('description') description: string): {message?:string, data: ITask}{
    const task = this.tasksService.createTask(title, description)
    
    return {message: 'Task created successfully', data: task}
  }
}
