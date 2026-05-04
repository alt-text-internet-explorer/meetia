import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
})

export default mongoose.models.User
