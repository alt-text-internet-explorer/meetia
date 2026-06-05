import { NextResponse } from "next/server"
import { authenticateUser } from "@/database/auth"
import { connectDB } from "@/database/db"
import { writeComment } from "@/database/dbServices"

export async function POST(req, res) {
  const { comment, rev_id } = await req.json()

  const user = authenticateUser(req)

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await connectDB()
  const newComment = `${user.username}: ${comment}`
  await writeComment(user.username, comment, rev_id)

  return NextResponse.json({ status: 200, comment: newComment })
}
