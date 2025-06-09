import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TaskController } from './task/task.controller';


@Module({
  imports: [TasksModule, AuthModule],
  controllers: [TaskController],
})
export class AppModule {}
