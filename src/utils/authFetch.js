// below is an example of how the auth header can be used to protect api requests
// on the frontend.

// fetch("/api/reviews", {
//   method: "POST",

//   headers: addAuthHeader({
//     "Content-Type": "application/json",
//   }),

//   body: JSON.stringify(data),
// })

export function addAuthHeader(otherHeaders = {}) {
  const token = localStorage.getItem("token")

  if (!token) {
    return otherHeaders
  }

  return {
    ...otherHeaders,
    Authorization: `Bearer ${token}`,
  }
}
