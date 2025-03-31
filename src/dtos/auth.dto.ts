import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from "class-validator";

export class SignUpDto {
  @IsString({ message: "Invalid name formate" })
  @IsNotEmpty()
  profilePhoto!: string;

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
  emailAddress!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

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
