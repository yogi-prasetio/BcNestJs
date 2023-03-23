import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from 'output/entities/Departments';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Departments) private serviceRepo: Repository<Departments>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { departmentId: id } });
  }

  public async Create(name: string) {
    try {
      const department = await this.serviceRepo.save({
        departmentName: name,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string) {
    try {
      const department = await this.serviceRepo.update(id, {
        departmentName: name,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const department = await this.serviceRepo.delete(id);
      return department;
    } catch (error) {
      return error.message;
    }
  }
}
