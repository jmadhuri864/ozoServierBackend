import { UserDto } from "../dtos/user.dto";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
export const updateUserService = async (id: any, data: UserDto) => {
  try {
    if (data.password) {
      return {
        status: 400,
        message: "you can not update password fro here you have to reset it",
      };
    }
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    console.log("hiiiiiiiiiiiiiii");
    console.log(updatedUser);

    return { status: 200, message: "updated successfully" };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};
