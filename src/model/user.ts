import { DB, Schema } from "../util/db";

const UserSchema = new Schema({
  user: { type: String, default: "root" },
  password: String,
  tel: String,
  date: { type: Date, default: Date.now }
});

export const UserModel = DB.model("user", UserSchema);
