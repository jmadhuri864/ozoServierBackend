import { IsDate, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBookingDto{
    @IsMongoId()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    u_id!:string

    @IsMongoId()
    @IsNotEmpty()
    @IsString()
    s_id!:string

    @IsDate()
    @IsOptional()
    @IsNotEmpty()
    bookingDataTime!: Date

    @IsEnum(["Confirmed", "Completed", "Declaim"])
    @IsString({each:true})
    status!:string
}