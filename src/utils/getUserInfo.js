"use client"

import { useAuth } from "@/context/AuthContext"

export default function getUsername() {
  const { username, userId, loggedIn } = useAuth()

  return username, userId, loggedIn
}