import { Module } from '@nestjs/common';
import { UserController } from './todolist.controller';
import { UserService } from './todolist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from 'src/schema/app.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: App.name, schema: AppSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
