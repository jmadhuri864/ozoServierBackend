
export interface IUser extends Document {
    profilePhoto : string;
    lastName : string;
    firstName : string;
    phoneNumber : string;
    emailAddress : string;
    password : string;
    termsCondition : boolean;
}
