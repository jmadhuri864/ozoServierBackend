import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
} from "class-validator";

export class SignUpDto {
  @IsString({ message: "Invalid name formate"})
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
    @IsEmail({}, { message : "Invalid email formate" })
    @IsNotEmpty({message : "Email is required"})
    emailAddress !: string;

    @IsString({message : "Password must be string"})
    @IsNotEmpty({message : "Password is required"})
    password !: string;
}