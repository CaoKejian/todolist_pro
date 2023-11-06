import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App } from 'src/schema/app.schema';
import { AppModule } from './app.module';

@Injectable()
export class AppService {
  constructor(@InjectModel(App.name) private appModel: Model<AppModule>) {}
  getHello(): string {
    return 'Hello World';
  }
}
