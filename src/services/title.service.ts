import { Title } from './../interfaces/title.interface';
import { titleModel } from "../models/title.model";
import { CreateTitleDto } from '../dtos/title.dto';

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
