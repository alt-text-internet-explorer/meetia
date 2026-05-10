import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()
const uri = process.env.MONGODB_URI;

export async function connectDB() {
  try {
    await mongoose.connect(uri);

    console.log("MongoDB connected");
  } catch (e) {
    // Ensures that the client will close when you finish/error
    console.error(e);
  }
}
