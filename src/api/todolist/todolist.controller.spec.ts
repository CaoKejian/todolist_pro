import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './todolist.controller';
import { UserService } from './todolist.service';

describe('AppController', () => {
  let appController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    appController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getTodoList()).toBe('Hello World!');
    });
  });
});
