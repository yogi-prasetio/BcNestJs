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
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryServ: CategoryService){}

    @Get()
    public async getAll() {
        return await this.categoryServ.findAll()
    }
}