import {
  Controller,
  Get,
  // Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  // Res,
} from '@nestjs/common';

// import { Response } from 'express';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products.service';


@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy filter`,
    };
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }
  @Get('')
  getProducts(
    // @Query('limit') limit = 100,
    // @Query('offset') offset = 0,
    // @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit = ${limit} offset= ${offset} brand= ${brand}`,
    // };
    return this.productsService.findAll();
  }
  @Post()
  create(@Body() playload: CreateProductDto) {
    return this.productsService.create(playload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
