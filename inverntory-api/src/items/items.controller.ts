import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Item, ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  private itemsService: ItemsService;

  constructor() {
    this.itemsService = new ItemsService(); 
    console.log('ItemsController initialized. ItemsService:', this.itemsService);
  }

  @Get()
  getAllItems(): Item[] {
    console.log('GET /items');
    return this.itemsService.findAll();
  }

  @Get(':sku') // Menggunakan `sku` untuk konsistensi dengan ItemsService
  getItem(@Param('sku') sku: string): Item {
    const item = this.itemsService.findOne(sku);
    if (!item) {
      throw new NotFoundException(`Item with SKU ${sku} not found`);
    }
    return item;
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )addItem(@Body() newItem: Item): void {
    console.log('POST /items called with:', newItem);
    this.itemsService.addItem(newItem);
  }

  @Put(':sku')
  updateItem(@Param('sku') sku: string, @Body() updatedItem: Partial<Item>): void {
    console.log(`PUT /items/${sku} called with:`, updatedItem);
    const item = this.itemsService.findOne(sku);
    if (!item) {
      throw new NotFoundException(`Item with SKU ${sku} not found`);
    }
    this.itemsService.update(sku, updatedItem);
  }

  @Delete(':sku')
  deleteItem(@Param('sku') sku: string): void {
    console.log(`DELETE /items/${sku} called`);
    const item = this.itemsService.findOne(sku);
    if (!item) {
      throw new NotFoundException(`Item with SKU ${sku} not found`);
    }
    this.itemsService.delete(sku);
  }
}
