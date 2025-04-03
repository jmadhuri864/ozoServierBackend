import { Category } from "../models/service.category.model";
import { ServiceDto } from "../dtos/service.dto";
import { Service } from "../models/service.model";


//Todo : Post Service
export const createService = async (data: ServiceDto, userId: any) => {
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
        ...data,
        userId: userId,
        categoryId : categoryID,
        titleId : titleID,
        
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
export const updateService= async  (data: ServiceDto, serviceID: any) => {
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
export const getAllService = async   (paramsQuery: any): Promise<any> => {
  try {
    const { page, limit } = paramsQuery;

    //  console.log(limit);

    const pageData = Number(page) || 1;
    const limitdata = Number(limit) || 2;
    const skip = (pageData - 1) * limitdata;

    //  console.log(`${pageData} ${limitdata}`);

    const services = await Service.find()
      .skip(skip)
      .limit(limitdata)
      .populate("categoryId", "name -_id")
      .populate("titleId", "name -_id")
      .populate("userId", "lastName firstName emailAddress -_id");

    //  console.log(services);

    return { services, dataLength: services.length };
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};

//Todo : Delete Service
export const deleteService = async(data: string) => {
  try {
    return await Service.findByIdAndDelete({ _id: data });
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

