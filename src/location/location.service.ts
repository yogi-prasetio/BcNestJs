import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from 'output/entities/Locations';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Locations) private serviceRepo: Repository<Locations>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { locationId: id } });
  }

  public async Create(street: string, postal: string, kota: string, state: string) {
    try {
      const location = await this.serviceRepo.save({
        streetAddress: street,
        postalCode: postal,
        city: kota,
        stateProvince: state,
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, street: string, postal: string, kota: string, state: string) {
    try {
      const location = await this.serviceRepo.update(id, {
        streetAddress: street,
        postalCode: postal,
        city: kota,
        stateProvince: state,
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: string) {
    try {
      const location = await this.serviceRepo.delete(id);
      return location;
    } catch (error) {
      return error.message;
    }
  }
}