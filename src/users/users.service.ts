import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/createUserDTO';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getUser(id: number) {
    const user = await this.usersRepository.getUser(id);

    if (!user) throw new NotFoundException('Não há usuário com esse nome');

    return user;
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.getUsers();
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    const userExists = await this.usersRepository.getUserByEmail(data.email);

    if (userExists) throw new ConflictException('Email já cadastrado');
    return this.usersRepository.createUser(data);
  }

  async updateUser(data: CreateUserDTO) {
    const userExists = this.usersRepository.getUserByEmail(data.email);

    if (!userExists) throw new NotFoundException('Usuário não encontrado');

    return this.usersRepository.updateUser(data);
  }

  async updateUserById(id: number, data: CreateUserDTO) {
    const userExists = await this.usersRepository.getUser(id);

    if (!userExists) throw new NotFoundException('Usuário não encontrado');

    const userWithEmail = await this.usersRepository.getUserByEmail(data.email);

    if (userWithEmail && userWithEmail.id !== id) {
      throw new ConflictException('Email pertence a outro usuário!');
    }

    return await this.usersRepository.updateUserById(id, data);
  }

  async updatedIsDeleted(id: number) {
    const userExists = await this.usersRepository.getUser(id);

    if (!userExists) throw new NotFoundException('Usuário não encontrado');

    return this.usersRepository.updateIsDeleted(id, userExists);
  }

  async deleteUser(id: number): Promise<User> {
    const userExists = await this.usersRepository.getUser(id);

    if (!userExists) throw new NotFoundException('Usuário não encontrado');

    return this.usersRepository.deleteUser(id);
  }
}
