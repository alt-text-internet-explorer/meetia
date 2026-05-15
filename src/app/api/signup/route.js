import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { connectDB } from "@/database/db"
import User from "@/database/userSchema"
import { generateAccessToken } from "@/database/auth"

export async function POST(request) {
  const { username, email, pwd } = await request.json()

  if (!username || !email || !pwd) {
    return NextResponse.json(
      { error: "Bad request: Invalid input data." },
      { status: 400 },
    )
  }

  await connectDB()

  // check if user exists
  const existingUser = await User.findOne({ username })

  if (existingUser) {
    return NextResponse.json(
      { error: "Username already taken" },
      { status: 409 },
    )
  }

  const hashedPassword = await bcrypt.hash(pwd, 10)

  // store the user
  const user = await User.create({
    username,
    password: hashedPassword,
    email,
    role: "user",
  })

  const token = await generateAccessToken(user)

  return NextResponse.json({ token }, { status: 201 })
}
