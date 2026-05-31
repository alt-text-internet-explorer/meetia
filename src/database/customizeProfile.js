import mongoose, { Schema } from "mongoose"

const CustomizeUser = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  profile_picture: {
    type: Image,
  },
  display_name: {
    type: String,
    required: true,
    trim: true,
  },
  interests: {
    type: String,
  },
  bio: {
    type: String,
  },
})

const Customize =
  mongoose.models.Customize || mongoose.model("Customize", CustomizeUser)

export default Customize
