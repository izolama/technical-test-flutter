import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Aktifkan validasi global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Menghapus properti yang tidak didefinisikan di DTO
      forbidNonWhitelisted: true, // Gagal jika ada properti tambahan
      transform: true, // Mengubah payload sesuai dengan DTO
    }),
  );
  await app.listen(4000);
}
bootstrap();
