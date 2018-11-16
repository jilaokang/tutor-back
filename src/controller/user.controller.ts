import { Context } from "koa";
import { UserModel } from "../model/user";
import { jwtSign } from "../util/jwt";

export const checkLogin = async (ctx: Context) => {
  let data = ctx.request.body as any;
  let result = (await UserModel.findOne(
    { user: data.user },
    "password",
    (_, v) => v
  )) as any;

  if (!result) {
    ctx.body = { msg: "用户不存在" };
    return;
  }

  result.password === data.password
    ? (ctx.body = { msg: "登陆成功", token: await jwtSign(data) })
    : (ctx.body = { msg: "密码错误" });
};

export const userSignup = async (ctx: Context) => {
  let data = ctx.request.body as any;
  let isExist = await UserModel.findOne({ user: data.user }, (_, v) => v);

  ctx.body = isExist
    ? "用户存在"
    : (new UserModel(ctx.request.body).save(), "注册成功");
};
