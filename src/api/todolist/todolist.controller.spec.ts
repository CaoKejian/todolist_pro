import { Test, TestingModule } from '@nestjs/testing';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';

describe('AppController', () => {
  let appController: TodolistController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodolistController],
      providers: [TodolistService],
    }).compile();

    appController = app.get<TodolistController>(TodolistController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getTodoList()).toBe('Hello World!');
    });
  });
});
