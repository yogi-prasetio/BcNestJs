import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'output/entities/Products';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products) private serviceRepo: Repository<Products>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(prodId: number) {
    return await this.serviceRepo.findOne({ where: { id: prodId } });
  }

  
  public async Create(name: string, description: string, price: number, file) {
    try {
      const product = await this.serviceRepo.save({
        name: name,
        description: description,
        price: price,
        image: file.originalname,
      });
      return product;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string, description: string, price: number, file) {
    try {
      const product = await this.serviceRepo.update(id, {
        name: name,
        description: description,
        price: price,
        image: file.originalname,
      });
      return product;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const product = await this.serviceRepo.delete(id);
      return product;
    } catch (error) {
      return error.message;
    }
  }
}
