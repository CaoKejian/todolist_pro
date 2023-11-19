import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { deleteType, todolistType } from 'src/interface/todolist.interface';
import { CreateTodoListDto } from 'src/validate/todolist.dto';

@ApiTags('todolist接口')
@Controller('api/todolist')
@Controller()
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Get('/')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: '返回所有todolist' })
  @ApiOperation({ summary: '获取todolist' })
  async getTodoList(): Promise<todolistType[]> {
    return this.todolistService.getTodoList();
  }

  @Post('/')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: '添加一项todolist' })
  @ApiOperation({ summary: '新增todolist' })
  async insertTodoList(@Body() data: CreateTodoListDto) {
    return this.todolistService.insertTodoList(data);
  }

  @Post('/delete')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: '删除一项或多项todolist' })
  @ApiOperation({ summary: '删除一项或多项todolist' })
  async deleteTodoList(@Body() data: deleteType[]) {
    return this.todolistService.deleteTodoList(data);
  }
}
