import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, UserRole } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } });
  }
  

  async create(userDto: CreateUserDto): Promise<User> {
    const hashed = await bcrypt.hash(userDto.password, 10);
    const user = this.userRepo.create({ ...userDto, password: hashed });
    return this.userRepo.save(user);
  }
  

  async changeRole(userId: number, role: UserRole): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: userId } });
  
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  
    user.role = role;
    return this.userRepo.save(user);
  }

}
