import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Matches,
  IsEmail,
  IsBoolean,
} from "class-validator";

export class UserDto {
  @IsString({ message: "Invalid name formate" })
  @IsOptional()
  profilePhoto!: string;

  @IsString()
  @IsOptional()
  LastName!: string;

  @IsString()
  @IsOptional()
  firstName!: string;

  @IsString()
  @IsOptional()
  @Matches(/^[0-9]{10}$/, { message: "Mobile number must be 10 digits" })
  phoneNumber!: string;

  @IsEmail()
  @IsOptional()
  emailAddress!: string;

  @IsString()
  @IsOptional()
  password!: string;

  @IsBoolean()
  @IsOptional()
  termsCondition!: boolean;
}
