import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 12,
      stock: 5,
      image: '',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const productFound = this.products.findIndex((item) => item.id == id);
      this.products[productFound] = {
        ...product,
        ...payload,
      };
      return this.products[productFound];
    }
    return null;
  }
  delete(id: number) {
    const productFound = this.products.findIndex((item) => item.id == id);
    let message = '';
    if (productFound >= 0) {
      this.products.splice(productFound, 1);
      message = `Product ${id} delete`;
    } else {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return message;
  }
}
