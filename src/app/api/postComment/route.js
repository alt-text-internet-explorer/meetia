export async function POST(req, res) {
  const comment = req.comment
  const rev_id = req.rev_id

  const user = authenticateUser(req)

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await connectDB()

  await writeComment(user.displayName, comment, rev_id)

  return NextResponse.json({ status: 200 })
}