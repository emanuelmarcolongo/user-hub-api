import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('')
  async getUsers() {
    return this.userService.getUsers();
  }

  // @Get(':id')
  // async getUser(@Param('id', ParseIntPipe) id: number) {
  //   try {
  //     return this.userService.getUser(id);
  //   } catch (error) {
  //     return 'Erro interno do servidor';
  //   }
  // }

  @Post('')
  async createUser(@Body() userDTO: CreateUserDTO): Promise<User> {
    return this.userService.createUser(userDTO);
  }

  // @Put('')
  // async updateUser(@Body() userDTO: CreateUserDTO): Promise<User> {
  //   return this.userService.updateUser(userDTO);
  // }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDTO: CreateUserDTO,
  ): Promise<User> {
    return this.userService.updateUserById(id, userDTO);
  }

  @Put('delete/:id')
  async updateIsDeleted(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.updatedIsDeleted(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.userService.deleteUser(id);
    } catch (error) {
      return 'Erro interno do servidor';
    }
  }
}
