import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
    constructor(private Services: JobService) {}
  
    @Get()
    public async getAll() {
      return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: string) {
      return await this.Services.findOne(id);
    }
    @Post()
    public async Create(
        @Body('id') id: string,
        @Body('job_title') job_title: string,
        @Body('min_salary') min_salary: number,
        @Body('max_salary') max_salary: number) {
      return await this.Services.Create(id,job_title,min_salary,max_salary);
    }
    @Put(':id')
    public async Update(
        @Param('id') id: string, 
        @Body('job_title') job_title: string,
        @Body('min_salary') min_salary: number,
        @Body('max_salary') max_salary: number) {
      return await this.Services.Update(id,job_title,min_salary,max_salary);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: string) {
      return await this.Services.Delete(id);
    }
  }
