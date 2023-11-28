import { Body, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/createUserDTO';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getUser(id: number) {
    return this.usersRepository.getUser(id);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    return this.usersRepository.createUser(data);
  }

  async updateUser(data: CreateUserDTO) {
    return this.usersRepository.updateUser(data);
  }

  async deleteUser(id: number): Promise<User> {
    return this.usersRepository.deleteUser(id);
  }
}
