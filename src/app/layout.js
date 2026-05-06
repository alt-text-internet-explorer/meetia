import { Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const PlayFair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Meetia",
  description: "Media tracking",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PlayFair.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
