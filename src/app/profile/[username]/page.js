import React from "react"
import Link from "next/link"
import UserProfile from "@/components/profile/page"

export default function Profile({ params }) {
  return <UserProfile params={params} />
}
