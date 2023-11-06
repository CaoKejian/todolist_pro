import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { todolistType } from 'src/interface/todolist.interface';
import { TodoList } from 'src/schema/todolist.schema';
import { TodolistModule } from './todolist.module';

@Injectable()
export class TodolistService {
  constructor(
    @InjectModel(TodoList.name) private todolistModel: Model<TodolistModule>,
  ) {}
  getTodoList(): Promise<todolistType[]> {
    return this.todolistModel.find();
  }
  insertTodoList(data: todolistType) {
    return this.todolistModel.create(data);
  }
}
