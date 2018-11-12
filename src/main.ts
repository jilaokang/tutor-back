import * as Koa from "koa";
import * as cors from "koa-cors";
import * as bodyParser from "koa-bodyparser";
import * as jwtKoa from "koa-jwt";

import router from "./router/main";
import config from "./config/default";
import { dbConn } from "./util/db";

const app = new Koa();

dbConn();

// app.use(jwtKoa({ secret: "secret" }));
app.use(cors({ origin: "*" }));
app.use(bodyParser());
app.use(router.routes());

app.listen(config.PORT);
