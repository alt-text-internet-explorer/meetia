"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useRedirectIfLoggedIn(redirectPath = "/") {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      router.replace(redirectPath)
    }
  }, [router, redirectPath])
}
