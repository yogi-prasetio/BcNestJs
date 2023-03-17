import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from 'output/entities/Customers';
import { Users } from 'output/entities/Users';
import { Orders } from 'output/entities/Orders';
import { OrderDetails } from 'output/entities/OrderDetails';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customers) private custRepo: Repository<Customers>,
        @InjectRepository(Users) private userRepo: Repository<Users>,
        @InjectRepository(Orders) private orderRepo: Repository<Orders>,
        @InjectRepository(OrderDetails) private ordetRepo: Repository<OrderDetails>,
      ) {}
    
      public async findAll() {        
        return await this.custRepo.find({
          relations: {
            user: false,
          },
        }), this.userRepo.find({
          relations: {
            orders: false,
          },          
        }), this.orderRepo.find({
          relations: {
            orderDetails: true,
          },
        })
      }    
}
    
