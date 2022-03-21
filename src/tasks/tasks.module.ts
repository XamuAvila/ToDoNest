import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './interfaces/tasks.schema';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [MongooseModule.forFeature([{name:"Tasks", schema: TaskSchema}])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
