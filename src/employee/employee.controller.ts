import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Param,
  } from '@nestjs/common';
  import { EmployeeService } from './employee.service';
  
  @Controller('employee')
  export class EmployeeController {
    constructor(private Services: EmployeeService) {}
  
    @Get()
    public async getAll() {
      return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
      return await this.Services.findOne(id);
    }
    @Post()
    public async Create(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('hire') hire: string,
        @Body('salary') salary: number) {
      return await this.Services.Create(firstName,lastName,email,phone,hire,salary);
    }
    @Put(':id')
    public async Update(
        @Param('id') id: number, 
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('hire') hire: string,
        @Body('salary') salary: number) {
      return await this.Services.Update(id,firstName,lastName,email,phone,hire,salary);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: number) {
      return await this.Services.Delete(id);
    }
  }
  