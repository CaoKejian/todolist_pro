import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { appType } from 'src/interface/app.interface';
import { App } from 'src/schema/app.schema';
import { AppModule } from './todolist.module';

@Injectable()
export class UserService {
  constructor(@InjectModel(App.name) private appModel: Model<AppModule>) {}
  getTodoList(): Promise<appType[]> {
    return this.appModel.find();
  }
}
