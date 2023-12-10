import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { TodoList, TodoListSchema } from 'src/schemas/todolist.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: TodoList.name, schema: TodoListSchema },
    // ]),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
