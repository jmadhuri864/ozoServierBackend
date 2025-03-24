import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message:"image is required"})
    image!: string;

    @IsString()
    @IsNotEmpty({message:"name is required"})
    firstName!: string;

    @IsString()
    
    @IsNotEmpty({message:"lastName is required"})
    lastName!: string;

    @IsString()
    @Matches(/^[1-9][0-9]{9}$/, { message: "Mobile number must be exactly 10 digits and cannot start with 0" })
    mobileNo!: string;

    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @Length(8, 20, { message: "Password must be between 8 and 20 characters" })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,20}$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      })
    password!: string;
}


export class LoginUserDto{
  @IsEmail()
    email!: string;

    @IsNotEmpty()
    @Length(8, 20, { message: "Password must be between 8 and 20 characters" })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,20}$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      })
    password!: string;

}