import { DB, Schema } from "../util/db";

const Recruit = new Schema({
  user: { type: String, default: "root" },
  subject: String,
  salary: String,
  grade: String,
  tel: String,
  introduce: String,
  date: { type: Date, default: Date.now }
});

export const RecruitModel = DB.model("recruit", Recruit);
