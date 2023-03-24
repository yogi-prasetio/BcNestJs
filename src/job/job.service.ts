import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from 'output/entities/Jobs';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Jobs) private serviceRepo: Repository<Jobs>
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: string) {
    return await this.serviceRepo.findOne({ where: { jobId: id } });
  }

  public async Create(id: string, jobTitle: string, min: number, max: number) {
    try {
      const job = await this.serviceRepo.save({
        jobId: id,
        jobTitle: jobTitle,
        minSalary: min,
        maxSalary: max,
      });
      return job;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: string, jobTitle: string, min: number, max: number) {
    try {
      const job = await this.serviceRepo.update(id, {
        jobTitle: jobTitle,
        minSalary: min,
        maxSalary: max,
      });
      return job;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const job = await this.serviceRepo.delete(id);
      return job;
    } catch (error) {
      return error.message;
    }
  }
}