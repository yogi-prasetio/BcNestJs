import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'output/entities/Categories';
import { Products } from 'output/entities/Products';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Categories) private categoryRepo: Repository<Categories>,
        @InjectRepository(Products) private productRepo: Repository<Categories>,
        ) {}
    
      public async findAll() {
        return await this.categoryRepo.find({
            relations: {
                products: true,
            },
        });        
      }

}