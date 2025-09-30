import { Types } from "mongoose";

export interface ICourse {
  // courseId?: string;
  id?:string;
  title: string;
  slug: string;
  category: Types.ObjectId;
  type: string;
  image: string;
  fee: string;
  rating?: number;
  totalRating?: number;
  totalStudentEnroll?: number;
  // mentor: Types.ObjectId;
  mentor: String;
  courseStart: Date;
  duration: number;
  lectures: number;
  totalExam?: number;
  totalProject?: number;
  courseDetails: string;
  courseOverview: string;
  curriculum: string[];
  courseIncludes: string[];
  softwareIncludes: string[];
  jobOption: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
