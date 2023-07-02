import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";


import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";

import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.set("trust proxy", true);
app.use(json());
// 测试环境关闭secure
app.use(cookieSession({ signed: false, secure: false }));

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all("*", async (req, res, next) => {
  next(new NotFoundError());
});
app.use(errorHandler);

const start = async () => {
  try {
    // 连在线上的mongoDB
    await mongoose.connect("mongodb://localhost:27017/auth", {
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

start();
