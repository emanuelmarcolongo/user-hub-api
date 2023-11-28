import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUserDTO';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(user: CreateUserDTO) {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async updateUser(user: CreateUserDTO) {
    return await this.prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        name: user.name,
        password: user.password,
        imgUrl: user.imgUrl,
        email: user.email,
      },
    });
  }

  async updateUserById(id: number, user: CreateUserDTO) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name: user.name,
        password: user.password,
        imgUrl: user.imgUrl,
        email: user.email,
      },
    });
  }

  async updateIsDeleted(id: number, user: User) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name: user.name,
        password: user.password,
        imgUrl: user.imgUrl,
        email: user.email,
        isDeleted: true,
      },
    });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
