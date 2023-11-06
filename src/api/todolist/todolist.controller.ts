import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { todolistType } from 'src/interface/todolist.interface';
import { CreateTodoListDto } from 'src/validate/todolist.dto';

@ApiTags('todolist')
@Controller('todolist')
@Controller()
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Get('/')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: '返回所有todolist' })
  async getTodoList(): Promise<todolistType[]> {
    return this.todolistService.getTodoList();
  }

  @Post('/')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: '添加一项todolist' })
  async insertTodoList(@Body() data: CreateTodoListDto) {
    return this.todolistService.insertTodoList(data);
  }
}
