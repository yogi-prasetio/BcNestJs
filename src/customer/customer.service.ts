import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from 'output/entities/Customers';
import { Users } from 'output/entities/Users';
import { Orders } from 'output/entities/Orders';
import { OrderDetails } from 'output/entities/OrderDetails';
import {  Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customers) private custRepo: Repository<Customers>,
      ) {}
    
      public async findAll() {        
        return await this.custRepo.find({          
          select: {
            id: true,
            firstname: true,
            lastname: true,
            user: {
              id: true,
              orders: {
                id: true,
                orderDetails: true
              }
            }
          },
          relations: ['user.orders.orderDetails'],
        })
      }    
}