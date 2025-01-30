import { Injectable } from '@nestjs/common';

export interface Item {
  sku: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {
      sku: 'SKU123',
      name: 'Item 1',
      image:
        'https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo',
      qty: 10,
      price: 20.0,
    },
    {
      sku: 'SKU124',
      name: 'Item 2',
      image:
        'https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo',
      qty: 5,
      price: 50.0,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item): void {
    this.items.push(item);
  }

  findOne(sku: string): Item | undefined {
    return this.items.find((item) => item.sku === sku);
  }

  update(sku: string, updatedItem: Partial<Item>): void {
    const index = this.items.findIndex((item) => item.sku === sku);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
    }
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  delete(sku: string): void {
    this.items = this.items.filter((item) => item.sku !== sku);
  }
}
