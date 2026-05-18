import jwt from "jsonwebtoken"

// everything that the jwt signs is passed as a payload
// the variables from the payload can then be decoded for use.
export function generateAccessToken(user) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        user_id: user._id.toString(),
        username: user.username,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "1d" },
      (error, token) => {
        if (error) {
          reject(error)
        } else {
          resolve(token)
        }
      },
    )
  })
}

// configured to work with nextjs app router
export function authenticateUser(req) {
  const authHeader = req.headers.get["authorization"]
  //Getting the 2nd part of the auth header (the token)
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    console.log("No token received")
    return null
  } else {
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
      return decoded
    } catch (error) {
      console.log("JWT error:", error)
      return null
    }
  }
}
