import { DB, Schema } from "../util/db";

const Wanted = new Schema({
  user: String,
  subject: String,
  tel: String,
  introduce: String,
  salary: String,
  data: { type: Date, default: Date.now }
});

export const WantedModel = DB.model("wanted", Wanted);
