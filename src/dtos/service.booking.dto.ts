import { IsDate, IsEnum, IsOptional, IsString } from "class-validator";

export class BookingDto {
  @IsString()
  @IsOptional()
  time?: string = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  @IsDate()
  @IsOptional()
  date?: Date = new Date(Date.now());

  @IsEnum(["Pending", "Processing", "Delivery"])
  @IsOptional()
  status?: string = "Pending";
}
