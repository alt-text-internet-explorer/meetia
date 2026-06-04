import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  displayName: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
  },

  role: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  friends: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    required: false,
  },
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User
