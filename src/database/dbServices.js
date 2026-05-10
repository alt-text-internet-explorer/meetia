import { connectDB } from "./db.js";
import { User, Review, Collection } from "./userSchema.js";

export async function createUser(userData) {

  const user = new User(userData);

  return await user.save();
}
