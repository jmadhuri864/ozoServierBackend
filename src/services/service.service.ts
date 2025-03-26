import { Category } from "../models/service.category.model";
import { ServiceDto } from "../dtos/service.dto";
import { Service } from "../models/service.model";
import { IService } from "../interfaces/service.interface";

//Todo : Post Service
export const createService = async (data: ServiceDto, userId : any) => {
  try {
    const categoryExit = await Category.findOne({ name: data.categoryId });
    if (categoryExit) {
      const serviceExit = await Service.find({ userId: userId });
      const filterByCategory = serviceExit.filter(
        (ele) => ele.categoryId && ele.categoryId.equals(categoryExit._id)
      );

      if (filterByCategory.length > 0) {
        return false;
      }

      const categoryID = categoryExit._id;
      const titleID = categoryExit.title;
      const newService = new Service({
        userId: userId,
        titleId: titleID,
        categoryId: categoryID,
        setPrice: data.setPrice,
        pricePer: data.pricePer,
        availability: data.availability,
        itemPhoto: data.itemPhoto,
        address: data.address,
      });
      const saveService = await newService.save();
      // console.log("New service saved:", saveService);
      return true;
    } else {
      console.log("Category not found");
      return false;
    }
  } catch (error) {
    console.error("Error saving service:", error);
    return { message: "Failed to create service" };
  }
};

//Todo : Update Service
export const updateService = async (data: ServiceDto, serviceID: any) => {
  try {
    const updateService = await Service.findByIdAndUpdate(serviceID, data);
    if (!updateService) {
      return { success: false, message: "Service not found", data: null };
    }
    return {
      success: true,
      messge: "Service update successfully",
      data: updateService,
    };
  } catch (error) {
    return { message: "Failed to update service" };
  }
};

//Todo : Get All Service
export const getAllService = async (): Promise<{
  success: boolean;
  message: string;
  data?: IService[];
}> => {
  try {
    const services = await Service.find()
      .populate("userId", "firstName lastName emailAddress")
      .populate("titleId", "name")
      .populate("categoryId", "name");

    return {
      success: true,
      message: "Services fetched successfully",
      data: services,
    };
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};
