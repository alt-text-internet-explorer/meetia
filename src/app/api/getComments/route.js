import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"
import { getCommentsOnReview } from "@/database/dbServices"

export async function GET(req) {
  const review = req
  await connectDB()

  let comms = await getCommentsOnReview(review)

  let jsonObject = { comments: comms }

  return NextResponse.json(jsonObject)
}