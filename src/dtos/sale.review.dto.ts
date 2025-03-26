import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateReviewDto{
    @IsMongoId()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    u_id!:string

    @IsMongoId()
    @IsNotEmpty()
    @IsString()
    s_id!:string

    @IsMongoId()
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    b_id!:string

    @IsString()
    description!:string

    @IsNumber()
    rating!:number

    @IsDate()
    @IsOptional()
    @IsNotEmpty()
    timeStamp!:Date
}
