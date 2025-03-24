import { ArrayMinSize, IsArray, IsEnum, IsMongoId, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class ServiceDto {
    @IsMongoId()
    @IsNotEmpty()
    userId!: string;
  
    @IsString()
    @IsNotEmpty()
    titleId!: string;
  
    @IsString()
    @IsNotEmpty()
    categoryId!: string;
  
    @IsNumber()
    @IsNotEmpty()
    @Min(0, { message: "Price must be a positive number" })
    setPrice!: number;
  
    @IsEnum(["Per Hour", "Per Day", "Fix Rate"])
    @IsOptional()
    pricePer?: string = "Per Hour";
  
    @IsEnum(["Morning : 9 To 12", "Afternoon : 2 To 4", "Evening : 4 To 6"])
    @IsOptional()
    availability?: string = "Morning : 9 To 12";
  
    @IsArray()
    @ArrayMinSize(1, { message: "At least one item photo is required" })
    @IsString({ each: true })
    itemPhoto!: string[];
  
    @IsString()
    @IsNotEmpty()
    address!: string;
  }