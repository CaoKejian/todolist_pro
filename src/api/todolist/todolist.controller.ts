import { Controller, Get, HttpCode } from '@nestjs/common';
import { UserService } from './todolist.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(200)
  @ApiResponse({ status: 200, description: '返回所有todolist' })
  getTodoList(): Promise<any> {
    return this.userService.getTodoList();
  }
}
