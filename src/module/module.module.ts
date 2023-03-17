import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { JobHistory } from 'output/entities/JobHistory';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { Regions } from 'output/entities/Regions';
import { Users } from 'output/entities/Users';
import { Customers } from 'output/entities/Customers';
import { Orders } from 'output/entities/Orders';
import { OrderDetails } from 'output/entities/OrderDetails';
import { Products } from 'output/entities/Products';
import { Categories } from 'output/entities/Categories';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { LocalGuard } from 'src/auth/local/local.guard';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { CustomerService } from 'src/customer/customer.service';
import { CustomerController } from 'src/customer/customer.controller';
import { CategoryService } from 'src/category/category.service';
import { CategoryController } from 'src/category/category.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Products,
      Regions,
      Countries,
      Locations,
      Departments,
      Employees,
      JobHistory,
      Jobs,
      Users,
      Customers,
      Orders,
      OrderDetails,
      Categories,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    })
  ],
  providers: [CategoryService, CustomerService, UserService, LocalGuard, JwtGuard],
  controllers: [CategoryController, CustomerController, UserController],
  exports: [CategoryService, CustomerService, UserService],
})
export class ModuleModule {}
