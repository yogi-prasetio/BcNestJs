import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseInterceptors,
  } from '@nestjs/common';
  import { CustomerService } from './customer.service';
  import { UserService } from './../user/user.service';

@Controller('customer')
export class CustomerController {
    constructor(private Customers: CustomerService) {}

  @Get()
  public async getAll() {
    return await this.Customers.findAll();
  }
}