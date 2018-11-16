import * as jwt from "jsonwebtoken";
import config from "../config/default";

export const jwtSign = async (unJwtValue: Object) =>
  await jwt.sign(unJwtValue, config.secret);

export const jwtVerify = async (jwtValue: string) =>
  await jwt.verify(jwtValue, config.secret, (e, v) => v);
