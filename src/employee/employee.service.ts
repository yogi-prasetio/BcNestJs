import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from 'output/entities/Employees';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employees) private serviceRepo: Repository<Employees>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { employeeId: id } });
  }

  
  public async Create(first: string, last: string, email: string, phone: string, hire: string, salary: number) {
    try {
      const employee = await this.serviceRepo.save({
        firstName: first,
        lastName: last,
        email: email,
        phoneNumber: phone,
        hireDate: hire,
        salary: salary,
      });
      return employee;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, first: string, last: string, email: string, phone: string, hire: string, sal: number) {
    try {
      const employee = await this.serviceRepo.update(id, {
        firstName: first,
        lastName: last,
        email: email,
        phoneNumber: phone,
        hireDate: hire,
        salary: sal,
      });
      return employee;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const employee = await this.serviceRepo.delete(id);
      return employee;
    } catch (error) {
      return error.message;
    }
  }
}
