import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    // 连在线上的mongoDB
    await mongoose.connect("mongodb+srv://liminjun:rSNpVRz0urGa1kSB@cluster0.3bymtih.mongodb.net/auth?retryWrites=true&w=majority", {
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
