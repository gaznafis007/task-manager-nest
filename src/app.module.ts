import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';


@Module({
  imports: [TasksModule, AuthModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
