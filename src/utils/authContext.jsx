"use client"

import { createContext, useContext, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"

const AuthContext = createContext(null)

function subscribe(callback) {
  window.addEventListener("auth-change", callback)
  window.addEventListener("storage", callback)

  return () => {
    window.removeEventListener("auth-change", callback)
    window.removeEventListener("storage", callback)
  }
}

function getSnapshot() {
  return Boolean(localStorage.getItem("token"))
}

function getServerSnapshot() {
  return false
}

export function AuthProvider({ children }) {
  const router = useRouter()
  const loggedIn = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function login(token, redirectPath = "/") {
    localStorage.setItem("token", token)
    window.dispatchEvent(new Event("auth-change"))
    router.replace(redirectPath)
  }

  function logout(redirectPath = "/login") {
    localStorage.removeItem("token")
    window.dispatchEvent(new Event("auth-change"))
    router.replace(redirectPath)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}
