import { Context } from "koa";
import { UserModel } from "../model/user";

export const findUserPassword = async (ctx: Context) => {
  let data = ctx.request.body as any;
  let res = (await UserModel.findOne(
    { tel: data.tel },
    "password",
    (_, v) => v
  )) as any;
  let result = !!res ? res.password : "不存在该用户";

  ctx.body = {
    msg: result
  };
};
