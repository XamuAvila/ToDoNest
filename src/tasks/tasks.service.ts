import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task.interface';
@Injectable()
export class TasksService {
    constructor(@InjectModel('Tasks') private readonly taskModel: Model<Task>){}
    private readonly logger = new Logger(TasksService.name);

    async createUpdateTask(createTaskDto: CreateTaskDto):Promise<void>{
        this.logger.log(`Creating task for ${createTaskDto.email}`);
        const {email} = createTaskDto;
        await this.createTask(createTaskDto);
    }
    private async createTask(createTaskDto:CreateTaskDto):Promise<Task>{
        const createdTask = new this.taskModel(createTaskDto);
        return await createdTask.save();
    }
}
