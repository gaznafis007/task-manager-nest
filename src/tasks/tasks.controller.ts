/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';
import { CreateTaskDto } from './dto/creat-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id:string):ITask{
    return this.tasksService.getTaskById(id)
  }
  @Post()
  createTask(
    @Body() createTaskObject:CreateTaskDto
  ): { message?: string; data?: ITask } {
    if(!createTaskObject.title || !createTaskObject.description){
      return {message: 'please provide task title and task description properly'}
    }
    const task = this.tasksService.createTask(createTaskObject);

    return { message: 'Task created successfully', data: task };
  }
}
