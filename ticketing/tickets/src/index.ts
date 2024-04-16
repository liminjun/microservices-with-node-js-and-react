import mongoose from "mongoose";
import { app } from "./app";
require("dotenv").config();
const start = async () => {
  try {
    // 连在线上的mongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/auth", {
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

app.listen(4000, () => {
  console.log("Listening on port 4000!");
});

start();
