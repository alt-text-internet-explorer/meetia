import { authenticateUser } from "@/database/auth"
import { NextResponse } from "next/server"
import { connectDB } from "@/database/db"
import User from "@/database/userSchema"

export async function POST(request) {
  // check for jwt token
  // if this jwt token matches current session
  authenticateUser()
  // logout
}
