import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://samuel:USrqe3Opyii78IQc@cluster0.aeflq.mongodb.net/tasks?retryWrites=true&w=majority',
    {useNewUrlParser:true, useUnifiedTopology:true}
    ),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
