import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsEmail({}, { message : "Invalid email formate" })
    @IsNotEmpty({message : "Email is required"})
    emailAddress !: string;

    @IsString({message : "Password must be string"})
    @IsNotEmpty({message : "Password is required"})
    password !: string;
}