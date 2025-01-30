import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ItemsService, Item } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() item: Item): void {
    this.itemsService.create(item);
  }

  @Put(':sku')
  update(@Param('sku') sku: string, @Body() updatedItem: Partial<Item>): void {
    this.itemsService.update(sku, updatedItem);
  }

  @Delete(':sku')
  delete(@Param('sku') sku: string): void {
    this.itemsService.delete(sku);
  }
}
