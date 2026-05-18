"use client"

import { useRouter } from "next/router"
import { logout } from "@/utils/logout"

export default function LogoutButton() {
  const router = useRouter
  return <button onClick={() => logout(router)}>Logout</button>
}
