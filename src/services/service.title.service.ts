import { TitleDto } from "../dtos/service.title.dto";
import { Title } from "../models/service.title.model";

export const titleService = async (data: TitleDto) => {
  try {
    console.log(data.name);
    
    const exists = await Title.findOne({ name: data.name });

    if (exists) {
      return false;
    }

    const newTitle = new Title({
      ...data,
    });

    const saveTitle = await newTitle.save();
    return true;
  } catch (error) {
    throw new Error("Failed to create title");
  }
};
