import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'ropa',
    },
  ];
  findAll() {
    return this.categories;
  }
  findOne(id: number) {
    const categories = this.categories.find((item) => item.id == id);
    if (!categories) {
      throw new NotFoundException(`categories #${id} not found`);
    }
    return categories;
  }
  create(payload: CreateCategoryDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newCategories = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategories);
    return newCategories;
  }
  update(id: number, payload: UpdateCategoryDto) {
    const categories = this.findOne(id);
    if (categories) {
      const categoriesFound = this.categories.findIndex((item) => item.id == id);
      this.categories[categoriesFound] = {
        ...categories,
        ...payload,
      };
      return this.categories[categoriesFound];
    }
    return null;
  }
  delete(id: number) {
    const categoriesFound = this.categories.findIndex((item) => item.id == id);
    let message = '';
    if (categoriesFound >= 0) {
      this.categories.splice(categoriesFound, 1);
      message = `categories ${id} delete`;
    } else {
      throw new NotFoundException(`categories #${id} not found`);
    }
    return message;
  }
}
