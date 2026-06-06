import { createReview, updateUserByUsername } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"

export async function POST(req, res) {
  const FormData = await req.formData()

  const user = authenticateUser(req)

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  console.log(user.id)

  //const profilePicture = FormData.get("image-upload")
  const displayName = FormData.get("display-name")
  //const interests = FormData.get("my-interests")
  const about = FormData.get("about-me")

  await connectDB()

  await updateUserByUsername(user.username, "displayName", displayName)
  await updateUserByUsername(user.username, "bio", about)

  console.log("updated!")

  return NextResponse.json({ status: 200 })
}
