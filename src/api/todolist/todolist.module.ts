import { Module } from '@nestjs/common';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoList, TodoListSchema } from 'src/schemas/todolist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
    ]),
  ],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule {}
