import { Router, Request, Response } from "express";

const router = Router();

router.get("/all-courses", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node + Express + Mongo!");
});

// router.post("/create-course");

export const CourseRoutes = router;
