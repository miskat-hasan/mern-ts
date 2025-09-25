import { model, Schema } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema = new Schema<ICourse>(
  {
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: Schema.Types.ObjectId, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    fee: { type: String, required: true },
    rating: { type: Number },
    totalRating: { type: Number },
    totalStudentEnroll: { type: Number },
    mentor: { type: Schema.Types.ObjectId, required: true },
    courseStart: { type: Date, required: true },
    duration: { type: Number, required: true },
    lectures: { type: Number, required: true },
    totalExam: { type: Number },
    totalProject: { type: Number },
    courseDetails: { type: String, required: true },
    courseOverview: { type: String, required: true },
    curriculum: [
      {
        type: String,
        required: true,
      },
    ],
    courseInclues: [
      {
        type: String,
        required: true,
      },
    ],
    softwareInclues: [
      {
        type: String,
        required: true,
      },
    ],
    jobOption: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CourseModel = model<ICourse>("Course", courseSchema);
