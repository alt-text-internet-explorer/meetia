import React from "react"
import Link from "next/link"

const Profile = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/profile">User Profile</Link>
      <Link href="/new-review">New Review</Link>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
