"use client"

import { createContext, useContext, useMemo, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode"

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

function decodeUser(token) {
  if (!token) return null
  try {
    return jwtDecode(token)
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const router = useRouter()
  const token = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const loggedIn = Boolean(token)

  //useMemo caches the token decoding into user
  const user = useMemo(() => {
    return decodeUser(token)
  }, [token])

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
    <AuthContext.Provider value={{ token, loggedIn, user, login, logout }}>
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
