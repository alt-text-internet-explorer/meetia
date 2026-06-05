import { getAllReviews, getReviewsFromUID } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"

export async function GET(req) {
  const user = authenticateUser(req)
  await connectDB()

  let revs = []

  if (!user || user.friends == undefined) {
    console.log("user not logged in")
    revs = await getAllReviews()
  } else {
    console.log("getting friend reviews")
    for (const id of user.friends) {
      revs.push(await getReviewsFromUID(id))
    }
  }

  let jsonObject = { reviews: revs }

  return NextResponse.json(jsonObject)
}
