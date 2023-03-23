import {
    Body,
    Controller,
    Delete,
    Get,
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
    @Delete(':id')
    public async Delete(@Param('id') id: number) {
      return await this.Services.Delete(id);
    }
  }
  