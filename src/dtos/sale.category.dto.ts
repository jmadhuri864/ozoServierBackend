import { IsMongoId, IsString, Matches } from "class-validator";

export class CreateCategoryDto {
  @IsString({ message: "category should be string" })
  cName!: string;

  @IsString({ message: "Title ID should be a valid MongoDB ObjectId string" })
  // @Matches(/^[0-9a-fA-F]{24}$/, { message: "Invalid ObjectId format" })
  @IsMongoId()
  t_id!: string;
}
