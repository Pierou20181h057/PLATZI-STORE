import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService){}
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // response.status(200).send({
    //   message: `product ${id}`,
    // });
    return this.categoriesService.findOne(id);
  }
  @Get('')
  getProducts() {
    // return {
    //   message: `products: limit = ${limit} offset= ${offset} brand= ${brand}`,
    // };
    return this.categoriesService.findAll();
  }
  @Post()
  create(@Body() playload: CreateCategoryDto) {
    return this.categoriesService.create(playload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
