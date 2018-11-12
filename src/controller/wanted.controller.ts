import { Context } from "koa";
import { WantedModel } from "../model/wanted";
import { jwtVerify } from "../util/jwt";
import { isNull } from "../util/util";

export const getWanted = async (ctx: Context) =>
  (ctx.body = await WantedModel.find());

export const addWanted = async (ctx: Context) => {
  let data = ctx.request.body as any;

  isNull(data.subject, data.tel, data.introduce, data.salary)
    ? (new WantedModel(data).save(), (ctx.body = { msg: "提交成功" }))
    : (ctx.body = { msg: "内容不能为空" });
};
