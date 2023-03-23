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
  
  import { CountryService } from './country.service';
  
  @Controller('country')
  export class CountryController {
    constructor(private Services: CountryService) {}
  
    @Get()
    public async getAll() {
      return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: string) {
      return await this.Services.findOne(id);
    }
    @Post()
    public async Create(@Body('id') id: string, @Body('name') name: string) {
      return await this.Services.Create(id,name);
    }
    @Put(':id')
    public async Update(@Param('id') id: string, @Body('name') name: string) {
      return await this.Services.Update(id, name);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: string) {
      return await this.Services.Delete(id);
    }
  }
  