import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { RegionService } from './region/region.service';
import { CountryService } from './country/country.service';
import { LocationService } from './location/location.service';
import { LocationController } from './location/location.controller';
import { RegionController } from './region/region.controller';
import { CountryController } from './country/country.controller';
import { DepartmentController } from './department/department.controller';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { DepartmentService } from './department/department.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hr-db',
      entities: ['dist/output/entities/*.js'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
})
export class AppModule {}
