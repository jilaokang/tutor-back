import * as mongoose from "mongoose";

export const DB = mongoose;
export const Schema = mongoose.Schema;

export const dbConn = () =>
  mongoose.connect(
    "mongodb://localhost/tutor",
    err => {
      console.log(err ? `数据库连接出现问题${err}` : "数据库连接成功！");
    }
  );
