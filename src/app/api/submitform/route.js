import { createReview } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"
import Collection from "@/database/models/Collection"

export async function POST(req, res) {
  const user = authenticateUser(req)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const FormData = await req.formData()

  const title = FormData.get("title")
  const author = FormData.get("author")
  const type = FormData.get("type")
  const rating = FormData.get("rating")
  const body = FormData.get("rbody")

  let jsonObject = {
    owner_id: user.user_id,
    username: user.username,
    display_name: user.displayName ? user.displayName : user.username,
    title: title,
    author: author,
    type: type,
    rating: rating,
    review_text: body,
    comments: [],
  }

  await connectDB()

  createReview(jsonObject).catch((error) => {
    console.log(error)
  })

  return NextResponse.json(jsonObject)
}
