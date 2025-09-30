import { ICourse } from "./course.interface";
import { CourseModel } from "./course.model";

const createCourseService = async (PayLoad: ICourse) => {
  return await CourseModel.create(PayLoad);
};

const getAllCourseService = async () => {
  return await CourseModel.find({});
};

const getACourseService = async (id: string) => {
  return await CourseModel.findById(id);
};

const updateCourseService = async (id: string, PayLoad: ICourse) => {
  return await CourseModel.findByIdAndUpdate(id, PayLoad);
};

const deleteCourseService = async (id: string) => {
  await CourseModel.findByIdAndDelete(id);
};

export const CourseServices = {
  createCourseService,
  getAllCourseService,
  getACourseService,
  updateCourseService,
  deleteCourseService,
};
