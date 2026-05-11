import { connectDB } from "./db.js"

import { User } from "./userSchema.js"

async function runTest() {
  await connectDB()

  const user = new User({
    username: "another",
    password: "password",
    role: "user",
    email: "alice@example.com",
  })

  await user.save()

  console.log("User inserted")

  const users = await User.find()

  console.log(users)

  process.exit(0)
}

runTest()
