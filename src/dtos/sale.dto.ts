import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateSaleDto {
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  u_id!: string;

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  t_id!: string;

  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  c_id!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString({ each: true })
  itemImage!: string[];

  @IsNotEmpty()
  @IsNumber()
  price!: number;

  @IsString()
  @IsOptional()
  @IsEnum(["Fixed", "Negotiable"], {
    message: "Condition must be either 'Fixed' or 'Negotiable'",
  })
  condition!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;
}
