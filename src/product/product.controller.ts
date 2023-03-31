import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Param,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
    import { ProductService } from './product.service';
  import { FileInterceptor } from '@nestjs/platform-express';

  @Controller('product')
  export class ProductController {
    constructor(private Services: ProductService) {}
  
    @Get()
    public async getAll() {
      return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
      return await this.Services.findOne(id);
    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    public async Create(
        @Body('name') name: string,
        @Body('description') description: string,
        @Body('price') price: number,
        @UploadedFile() file) {
      return await this.Services.Create(name,description,price,file);
    }
    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    public async Update(
        @Param('id') id: number, 
        @Body('name') name: string,
        @Body('description') description: string,
        @Body('price') price: number,
        @UploadedFile() file) {
      return await this.Services.Update(id,name,description,price,file);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: number) {
      return await this.Services.Delete(id);
    }
  }
  