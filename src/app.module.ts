import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandController } from './controllers/brand.controller';
import { CustomerController } from './controllers/customer.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { CustomerService } from './services/customer.service';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandController,
    CustomerController,
    UsersController,
  ],
  providers: [
    AppService,
    ProductsService,
    BrandService,
    CategoriesService,
    CustomerService,
    UsersService,
  ],
})
export class AppModule {}
