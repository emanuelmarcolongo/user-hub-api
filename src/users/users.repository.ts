import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUserDTO';
import { PrismaService } from 'src/prisma/prisma.service';

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
      },
    });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
