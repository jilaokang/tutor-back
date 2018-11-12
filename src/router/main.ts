import * as KoaRouter from "koa-router";

import { checkLogin, userSignup } from "../controller/user.controller";
import { getRecruit, addRecruit } from "../controller/recruit.controller";
import { getWanted, addWanted } from "../controller/wanted.controller";
import { findUserPassword } from "../controller/findpasswd.controller";

const router = new KoaRouter();

router
  .post("/signin", checkLogin)
  .post("/signup", userSignup)
  .post("/findPasswd", findUserPassword)
  .get("/recruit", getRecruit)
  .post("/recruit", addRecruit)
  .get("/wanted", getWanted)
  .post("/wanted", addWanted);

export default router;
