import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CourseRoutes } from "./app/modules/course/course.routes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("api/courses/", CourseRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node + Express + Mongo!");
});

export default app;
