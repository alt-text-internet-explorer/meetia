import mongoose, { Schema } from "mongoose"

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

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", CollectionSchema)

export default Collection
