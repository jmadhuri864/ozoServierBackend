export interface IUser {
    profilePhoto : string;
    lastName : string;
    firstName : string;
    phoneNumber : string;
    emailAddress : string;
    password : string;
    termsCondition : boolean;
    otp ?: string | null;
    otpExpires ?: Date | null;
}
