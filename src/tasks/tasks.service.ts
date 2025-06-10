/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/creat-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }
  getFilteredTask(taskFilterDto: GetTaskFilterDto): ITask[] {
    const { status, search } = taskFilterDto;
    let tasks = this.tasks;
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
    }
    return tasks;
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
  updateStatus(id: string, status: TaskStatus): ITask {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.status = status;
      return task;
    }
    throw new Error(`Task with id ${id} not found`);
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
