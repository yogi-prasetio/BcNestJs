import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'output/entities/Products';
import { Categories } from 'output/entities/Categories';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Products) private serviceRepo: Repository<Products>,
        ) {}
    
      public async findAll() {
        return await this.serviceRepo.find();
      }

}