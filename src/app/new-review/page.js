import React from "react"
import Link from "next/link"

const Review = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/profile">User Profile</Link>
      <Link href="/new-review">New Review</Link>
      <h1>New Review</h1>
    </div>
  )
}

export default Review
