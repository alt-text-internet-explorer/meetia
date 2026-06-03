import mongoose, { Schema } from "mongoose"

const ReviewSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  username: {
    type: String,
    required: true,
    trim: true,
  },

  display_name: {
    type: String,
    trim: true,
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

  comments: {
    type: [
        String,
    ],
  }
})

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema)

export default Review
