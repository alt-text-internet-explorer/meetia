export default function logout(router) {
  localStorage.removeItem("token")
  router.push("/login")
}
