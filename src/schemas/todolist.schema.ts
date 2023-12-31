import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoListDocument = HydratedDocument<TodoList>;
// schema 为数据库上传校验器
@Schema()
export class TodoList {
  @Prop({
    required: true,
    enum: ['1', '2'],
    message: "必须传入合法的select，例如'1'或者'2'.",
  })
  select: string;

  @Prop({ required: true })
  input: string;

  @Prop({ required: true })
  update: string;

  @Prop({ required: true })
  checked: boolean;
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
