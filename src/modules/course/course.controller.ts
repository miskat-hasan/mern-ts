import { Request, Response } from "express";
import { CourseServices } from "./course.service";
import { log } from "console";

const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await CourseServices.createCourseService(req.body);
    res.status(201).json({
      success: true,
      message: "Course created successfully.",
      course,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCourse = async (req: Request, res: Response) => {
  try {
    const courses = await CourseServices.getAllCourseService();

    res.status(200).json({
      success: true,
      message: "featched all course successfully.",
      courses,
    });
  } catch (error) {
    log(error);
  }
};

const getACourse = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Course ID is required.",
    });
  }

  const course = await CourseServices.getACourseService(id);

  res.status(200).json({
    success: true,
    message: "Fetched course successfully.",
    course,
  });
};

const updateCourse = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Course ID is requied.",
    });
  }

  const course = await CourseServices.updateCourseService(id, req.body);

  res.status(202).json({
    success: true,
    message: "Course successfully updated.",
    course,
  });
};

const deleteCourse = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Course ID is required.",
    });
  }

  await CourseServices.deleteCourseService(id);

  res.status(200).json({
    success: true,
    message: "Course deleted successflly.",
  });
};

export const CousreController = {
  createCourse,
  getAllCourse,
  getACourse,
  updateCourse,
  deleteCourse,
};
