import { Title } from "../models/title.models";

export const createTitle = async (data : any) => {
    try {
        const {name} = data;

        const exists = await Title.findOne({name});

        if(exists)
        {
            return {message : "Title already exists"};
        }

        const newTitle = new Title({
            name
        })
         console.log(newTitle);
         
        const saveTitle = await newTitle.save();
        return {message: "Title Saved", saveTitle};

    } catch (error) {
        return {message : "Failed to create title"};
    }
}