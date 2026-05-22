"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./authContext"

export function useRedirectIfLoggedIn(redirectPath = "/") {
  const router = useRouter()
  const { loggedIn } = useAuth()

  useEffect(() => {
    if (loggedIn) {
      router.replace(redirectPath)
    }
<<<<<<< HEAD
  }, [router, redirectPath])
}
=======
  }, [loggedIn, router, redirectPath])
}
>>>>>>> eb59bcc (Add a auth context provider to fix hydration issue)
