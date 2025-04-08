import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from "class-validator";

export class SignUpDto {
  // @IsString({ message: "Invalid name formate" })
  // @IsOptional()
  // profilePhoto!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{10}$/, { message: "Mobile number must be 10 digits" })
  phoneNumber!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsEmail({}, { message: "Invalid email format. Please enter a valid email." })
  emailAddress!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  
  // @Transform(({ value }) => value === "true")
  @Transform(({ value }) => {
    if (value === true || value === 'true') return true;
    if (value === false || value === 'false') return false;
    return false; // default or throw an error if needed
  })
  @IsBoolean()
  termsCondition!: boolean;
}

export class LoginDto {
  @IsEmail({}, { message: "Invalid email formate" })
  @IsNotEmpty({ message: "Email is required" })
  emailAddress!: string;

    @IsString({message : "Password must be string"})
    @IsNotEmpty({message : "Password is required"})
    password !: string; 
}

export class SendOtpDto {
  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email is required" })
  emailAddress!: string;
}

export class VerifyOtpDto {
  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email is required" })
  emailAddress!: string;

  @IsString()
  @Length(6, 6, { message: "OTP must be exactly 6 digits" })
  @IsNotEmpty({ message: "OTP is required" })
  otp!: string;
}

export class ResetPasswordDto {
  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email is required" })
  emailAddress!: string;

  @IsString()
  @Length(6, 6, { message: "OTP must be exactly 6 digits" })
  @IsNotEmpty({ message: "OTP is required" })
  otp!: string;

  @IsString()
  @Length(6, 20, { message: "Password must be between 6 and 20 characters" })
  @IsNotEmpty({ message: "New password is required" })
  newPassword!: string;
}
