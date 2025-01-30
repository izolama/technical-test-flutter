import { IsString, IsNumber, IsPositive, IsUrl } from 'class-validator';

export class CreateItemDto {
  @IsString()
  sku!: string;

  @IsString()
  name!: string;

  @IsUrl()
  image!: string;

  @IsNumber()
  @IsPositive()
  qty!: number;

  @IsNumber()
  @IsPositive()
  price!: number;
}
