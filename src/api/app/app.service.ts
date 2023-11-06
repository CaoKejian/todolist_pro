import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '欢迎进入TodoList后台，这是专门为瑶瑶开发的后台！可以访问 http:localhost:3000/docs 来查看接口文档';
  }
}
