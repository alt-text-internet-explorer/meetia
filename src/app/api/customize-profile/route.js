import { customizeProfile } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"

export async function POST(req, res) {
  const FormData = await req.formData()
  const profilePicture = FormData.get("image-upload")
  const displayName = FormData.get("display-name")
  const about = FormData.get("about-me")

  let jsonObject = {
    profilePicture: profilePicture,
    displayName: displayName,
    about: about,
  }

  await connectDB()

  customizeProfile(jsonObject).catch((error) => {
    console.log(error)
  })

  return NextResponse.json({ profilePicture, displayName, interests, about })
}
