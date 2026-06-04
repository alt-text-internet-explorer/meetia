import mongoose, { Schema } from "mongoose"

const CollectionSchema = new Schema(
  {
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    genre: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true },
)

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", CollectionSchema)

export default Collection
