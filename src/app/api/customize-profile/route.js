import { connectDB } from "@/database/db"
import User from "@/database/userSchema"

export async function POST(req, res) {
  const FormData = await req.formData()
  //const profilePicture = FormData.get("image-upload")
  const displayName = FormData.get("display-name")
  const about = FormData.get("about-me")

  let jsonObject = {
    profilePicture: profilePicture,
    displayName: displayName,
    about: about,
  }

  await connectDB()

  updateUserById()

  return NextResponse.json({ profilePicture, displayName, interests, about })
}
