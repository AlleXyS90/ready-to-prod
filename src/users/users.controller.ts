// External
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

// Internal
import { UsersService } from '../application/users.service';
import { User } from '../domain/user.entity';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: User) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get()
  findAll() {
    console.log('api version: 1');
    return this.usersService.findAll().then((users) => {
      const newUser = { id: 999, username: 'Admin', email: 'admin@endava.com' };
      return users.concat(newUser);
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: Partial<User>) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
