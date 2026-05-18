import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
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
    type: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }],
    required: false
  }
})

const ReviewSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },

  author: {
    type: String,
    required: true,
    trim: true,
  },

  type: {
    type: String,
    required: true,
    trim: true,
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  review_text: {
    type: String,
  },
})

const CollectionSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
})

export const User = mongoose.models.User || mongoose.model("User", UserSchema)

export const Review =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema)

export const Collection =
  mongoose.models.Collection || mongoose.model("Collection", CollectionSchema)
