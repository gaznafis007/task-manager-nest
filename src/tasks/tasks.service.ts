import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './task.model';
import {v4 as uuid} from 'uuid'


@Injectable()
export class TasksService {
    private tasks: ITask[] = [];

    getAllTasks(): ITask[] {
        return this.tasks;
    }

    createTask(title:string, description:string): ITask{
        const task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.TODO,
        }
        this.tasks.push(task);
        return task
    }
}
