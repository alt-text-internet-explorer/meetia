import { addFriend } from "@/database/dbServices";
import { NextResponse, NextRequest } from "next/server"
import { connectDB } from "@/database/db"
import { authenticateUser } from "@/database/auth"

export async function POST(req,res){
    const user = authenticateUser(req)
      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }

    const body = await req.json();
    const {fid} = body;

    await connectDB()

    addFriend("insert current user here", fid).catch((error) => {
        console.log(error)
    })

}