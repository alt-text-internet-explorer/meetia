import { addFriend, getUserByUsername } from "@/database/dbServices"
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"

export async function POST(req, res) {
  const user = authenticateUser(req)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const { friendusername } = body
  const frienduser = await getUserByUsername(friendusername)

  const username = user.username

  console.log(username)
  console.log(frienduser._id)

  await connectDB()

  await addFriend(username, frienduser._id).catch((error) => {
    console.log(error)
  })

  return NextResponse.json({ status: 200 })
}
