import { Context } from "koa";
import { RecruitModel } from "../model/recruit";
import { isNull } from "../util/util";
import { jwtVerify } from "../util/jwt";

export const getRecruit = async (ctx: Context) =>
  (ctx.body = await RecruitModel.find());

export const addRecruit = async (ctx: Context) => {
  let data = ctx.request.body as any;

  isNull(data.grade, data.introduce, data.salary, data.subject, data.tel)
    ? (new RecruitModel(data).save(), (ctx.body = { msg: "提交成功" }))
    : (ctx.body = { msg: "内容不能为空" });
};
