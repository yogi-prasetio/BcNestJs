import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Countries) private serviceRepo: Repository<Countries>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: string) {
    return await this.serviceRepo.findOne({ where: { countryId: id } });
  }

  public async Create(id: string, name: string) {
    try {
      const country = await this.serviceRepo.save({
        countryId: id,
        countryName: name,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: string, name: string) {
    try {
      const country = await this.serviceRepo.update(id, {
        countryName: name,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const country = await this.serviceRepo.delete(id);
      return country;
    } catch (error) {
      return error.message;
    }
  }
}