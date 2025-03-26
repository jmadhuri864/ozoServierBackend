import { IsNotEmpty, IsString } from "class-validator";

export class TitleDto {
    @IsString()
    @IsNotEmpty()
    name !: string;
}