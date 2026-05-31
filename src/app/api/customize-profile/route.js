import { createReview } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"

export async function POST(req, res) {
  const FormData = await req.formData()
  const profilePicture = FormData.get("image-upload")
  const displayName = FormData.get("display-name")
  const interests = FormData.get("my-interests")
  const about = FormData.get("about-me")

  let jsonObject = {
    profilePicture: profilePicture,
    displayName: displayName,
    interests: interests,
    about: about,
  }

  await connectDB()

  createReview(jsonObject).catch((error) => {
    console.log(error)
  })

  return NextResponse.json({ profilePicture, displayName, interests, about })
}
