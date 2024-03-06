import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../application/users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let userServiceMock: Partial<UsersService>;

  beforeEach(async () => {
    userServiceMock = {
      // Mock any methods you need for testing
      // For example:
      findAll: jasmine.createSpy('findAll').and.returnValue([]), // Mocking findAll method
      findOne: jasmine.createSpy('findOne').and.returnValue({}), // Mocking findOne method
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: userServiceMock }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
