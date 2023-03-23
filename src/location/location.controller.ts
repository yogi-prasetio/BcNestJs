import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,    
  } from '@nestjs/common';
  
  import { LocationService } from './location.service';
  
  @Controller('location')
  export class LocationController {
    constructor(private Services: LocationService) {}
  
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
        @Body('street') street: string,
        @Body('postal') postal: string,
        @Body('city') city: string,
        @Body('state') state: string) {
      return await this.Services.Create(street,postal,city,state);
    }
    @Put(':id')
    public async Update(
        @Param('id') id: number, 
        @Body('street') street: string,
        @Body('postal') postal: string,
        @Body('city') city: string,
        @Body('state') state: string) {
      return await this.Services.Update(id,street,postal,city,state);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: string) {
      return await this.Services.Delete(id);
    }
  }
  