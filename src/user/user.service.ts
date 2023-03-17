import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'output/entities/Users';
import { Customers } from 'output/entities/Customers';
import { Repository } from 'typeorm';
import * as Bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const Salt = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
    @InjectRepository(Customers) private custRepo: Repository<Customers>,
    private jwtService: JwtService,
  ) {}

  public async signup(fields: any) {
    try {
      const hashPassword = await Bcrypt.hash(fields.password, Salt);
      const user = await this.userRepo.save({
        username: fields.username,
        password: hashPassword,
      });
      const { password, ...result } = user;
      return result;
    } catch (error) {
      return error.message;
    }
  }

  public async validateUser(username: string, pass: string) {
    const user = await this.userRepo.findOne({
      where: { username: username },
    });
    const compare = await Bcrypt.compare(pass, user.password);

    if (compare) {
      const { password, ...result } = user;
      return user;
    }
  }

  public async login(user: any) {
    const payload = {
      user_id: user.id,
      username: user.username,
      user_pass: user.password,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async getAll(user: any) {
    const customer = await this.custRepo.findOne(
      { where: { user_id: user.user_id } });

      const profile = [user, customer];
      return profile;
  }
}
