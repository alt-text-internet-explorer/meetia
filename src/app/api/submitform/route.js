import { createReview } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"

export async function POST(req, res) {
  const FormData = await req.formData()
  const title = FormData.get("title")
  const author = FormData.get("author")
  const type = FormData.get("type")
  const rating = FormData.get("rating")
  const body = FormData.get("rbody")
  const cover = FormData.get("cover")

  let jsonObject = {
    title: title,
    author: author,
    type: type,
    rating: rating,
    review_text: body,
    cover: cover
  }

  await connectDB()

  createReview(jsonObject).catch((error) => {
    console.log(error)
  })

  return NextResponse.json({ type, title, author, rating, body })
}
