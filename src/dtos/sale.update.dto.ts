import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class UpdateSaleDto {
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  @IsOptional()
  u_id!: string;

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  @IsOptional()
  t_id!: string;

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  @IsOptional()
  c_id!: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description!: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @IsOptional()
  itemImage!: string[];

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  price!: number;

  @IsString()
  @IsOptional()
  @IsEnum(["Fixed", "Negotiable"], {
    message: "Condition must be either 'Fixed' or 'Negotiable'",
  })
  condition!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  location!: string;
}
