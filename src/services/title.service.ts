import { Title } from "../models/title.model";
export const postTitle = async (t_id: Number, tName: String) => {
  const title = await Title.findOne({ t_id });
  if (!title) {
    const newTitle = new Title({
      t_id,
      tName,
    });
    newTitle.save();
    return true;
  } else {
    return false;
  }
};
