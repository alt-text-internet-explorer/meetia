import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { connectDB } from "@/database/db"
import User from "@/database/userSchema"
import { generateAccessToken } from "@/database/auth"

export async function POST(request) {
  const { username, pwd } = await request.json()

  await connectDB()

  // find the user
  const user = await User.findOne({ username })

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // compare the hashed variant of the password
  const matched = await bcrypt.compare(pwd, user.password)

  if (!matched) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // generate token same as before
  const token = await generateAccessToken(user)

  return NextResponse.json({ token }, { status: 200 })
}
