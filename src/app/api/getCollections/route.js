import { getAllCollectionsFromOwner, getAllReviews, getReviewsFromUID } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"
import { addAuthHeader } from "@/utils/authFetch"

export async function GET(req) {
  const user = authenticateUser(req)
  await connectDB()

  let colls = []

  if (!user) {
    console.log("user not logged in")
  } else {
    colls = await getAllCollectionsFromOwner()
  }

  let jsonObject = { collections: colls }

  return NextResponse.json(jsonObject)
}
