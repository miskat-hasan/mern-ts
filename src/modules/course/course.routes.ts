import { Router } from "express";
import { CousreController } from "./course.controller";

const router = Router();

router.post("/create-course", CousreController.createCourse);
router.get("/", CousreController.getAllCourse);
router.get("/:id", CousreController.getACourse);
router.delete("/:id", CousreController.deleteCourse);

export const CourseRoutes = router;
