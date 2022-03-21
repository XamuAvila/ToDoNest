import { Body, Controller, Post } from '@nestjs/common';
import moment from 'moment';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('api/v1/tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    
    @Post()
    async createTask(@Body() task:CreateTaskDto){
        await this.tasksService.createUpdateTask(task);
    }
}
