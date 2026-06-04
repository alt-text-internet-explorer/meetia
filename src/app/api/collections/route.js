// app/api/collections/route.js

import { NextResponse } from "next/server"
import { connectDB } from "@/database/db"
import Collection from "@/database/collectionSchema"
import { authenticateUser } from "@/database/auth"

export async function POST(req) {
  const user = authenticateUser(req)

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, genre, description } = await req.json()

  await connectDB()

  const collection = await Collection.create({
    owner_id: user.id,
    title,
    genre,
    description,
    reviews: [],
  })

  return NextResponse.json(collection, { status: 201 })
}
