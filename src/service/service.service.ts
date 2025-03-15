import { Service } from "../models/service.models";

export const createService = async (data : any) => {
    try {
        const {userId, titleId, categoryId, setPrice, pricePer, availability,itemPhoto, address} = data;

        const userExit = await Service.find({userId});
        
        if(userExit){
            const filterByTitle = userExit.map((ele) => {
                return ele.titleId === titleId;
        })
            
        if(filterByTitle){
            return {message : "Title"}
        }
        }

    } catch (error) {
        
    }
}