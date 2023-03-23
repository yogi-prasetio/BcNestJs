import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { DepartmentService } from './department.service';
  
  @Controller('department')
  export class DepartmentController {
    constructor(private Services: DepartmentService) {}
  
    @Get()
    public async getAll() {
      return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
      return await this.Services.findOne(id);
    }
    @Post()
    public async Create(@Body('name') name: string) {
      return await this.Services.Create(name);
    }
    @Put(':id')
    public async Update(@Param('id') id: number, @Body('name') name: string) {
      return await this.Services.Update(id, name);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: number) {
      return await this.Services.Delete(id);
    }
  }
  