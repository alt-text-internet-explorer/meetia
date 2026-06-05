import { NextResponse } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"
import { createCollection } from "@/database/dbServices"

export async function POST(req) {
  const user = authenticateUser(req)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const FormData = await req.formData()

  const title = FormData.get("title")
  const genre = FormData.get("genre")
  const description = FormData.get("description")

  let jsonObject = {
    owner_id: user.user_id,
    title: title,
    genre: genre,
    description: description,
    reviews: [],
  }

  await connectDB()

  createCollection(jsonObject).catch((error) => {
    console.log(error)
  })

  return NextResponse.json(jsonObject)
}
