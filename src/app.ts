import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CourseRoutes } from "./modules/course/course.routes";
// import { UserRouter } from "./modules/user/user.routes";
// import { StudentRouter } from "./modules/student/student.routes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

// app.use("api/user/", UserRouter);
// app.use("api/student/", StudentRouter);
app.use("/api/course/", CourseRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node + Express + Mongo!");
});

export default app;
