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
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productServ: ProductService){}

    @Get()
    public async getAll() {
        return await this.productServ.findAll()
    }
}
