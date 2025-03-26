import { Title } from '../interfaces/sale.title.interface';
import { titleModel } from "../models/sale.title.model";
import { CreateTitleDto } from '../dtos/sale.title.dto';

export const postTitle = async (titleInfo: CreateTitleDto) => {
 // console.log(titleInfo);
  const tName : string = titleInfo.tName;
  console.log(tName);
  
  const title = await titleModel.findOne({tName});
  console.log(title);
  if (title) {
    return false;
  } 

  const newTitle = new titleModel({
    ...titleInfo
  });
  console.log(newTitle);
  await newTitle.save();
  return true;

};
