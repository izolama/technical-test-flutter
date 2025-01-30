import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module'; // Impor modul item

@Module({
  imports: [ItemsModule], // Tambahkan modul item
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
