import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService, ProductFilters, ProductSort } from './products.service';
import { Product } from '../database/entities/product.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('category') category?: string,
    @Query('brand') brand?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('search') search?: string,
    @Query('sortField') sortField?: string,
    @Query('sortOrder') sortOrder?: 'ASC' | 'DESC',
  ) {
    const filters: ProductFilters = {
      category,
      brand,
      minPrice,
      maxPrice,
      search,
    };

    const sort: ProductSort | undefined = sortField
      ? { field: sortField as any, order: sortOrder || 'ASC' }
      : undefined;

    return this.productsService.findAll(page, limit, filters, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.create(productData);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(id, productData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }

  @Get('categories/all')
  async getCategories() {
    return this.productsService.getCategories();
  }

  @Get('brands/all')
  async getBrands() {
    return this.productsService.getBrands();
  }
} 