import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { deleteType, todolistType } from 'src/interface/todolist.interface';
import { TodoList } from 'src/schemas/todolist.schema';
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
    const now = new Date();
    const formattedDate = `${now.getFullYear()}/${
      now.getMonth() + 1
    }/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

    const newData = {
      ...data,
      update: formattedDate,
      checked: false,
    };

    return this.todolistModel.create(newData);
  }
  deleteTodoList(id: deleteType[]) {
    if (Array.isArray(id) && id.length > 0) {
      return this.todolistModel.deleteMany({ _id: { $in: id } });
    } else {
      throw new Error('Invalid or empty ID array provided.');
    }
  }
}
