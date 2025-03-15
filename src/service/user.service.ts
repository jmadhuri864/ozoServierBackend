import { User } from './../models/user.models';
//import { user } from "../interface/user.interface"

export const createAcc = async (data : any) => {
    try {
        const {profilePhoto, lastName, firstName, phoneNumber, emailAddress, password, termsCondition}  =  data;
        console.log(data);
        
        const userExit = await User.findOne({emailAddress});

        if(userExit)
        {
            return {message : "User already exit...please signin"}
        }
        console.log(data);
        const newUser = new User ({
            profilePhoto,
            lastName,
            firstName,
            phoneNumber,
            emailAddress,
            password,
            termsCondition
        })
        console.log(newUser);
        
        const saveUser = await newUser.save();
        
        return {message : "Account created successfully", saveUser};

    } catch (error) {
        return {message : "Faild to create user"};
    }
}

export const logIn = async (data : any) => {
    try {
        const {emailAddress, password} = data;

        const userExit = await User.findOne({emailAddress});

        if(!userExit)
        {
            return {message : "invalid credentials"}
        }

        if(userExit.password === password)
        {
            return {message : "Login Successful"}
        }else{
            return {message : "invalid credintials"}
        }

    } catch (error) {
        return {message : "Faild to login"};
    }
}