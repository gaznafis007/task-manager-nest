/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/creat-task.dto';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }
  createTask(createTask: CreateTaskDto): ITask {
    const { title, description } = createTask;
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.TODO,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask (id:string):ITask[]{
    if(!id){
      throw new Error('please provide an valid id')
    }
    const remainingTasks = this.tasks.filter((task) => task.id !== id);
    this.tasks = [...remainingTasks];
    return this.tasks
  }
}
