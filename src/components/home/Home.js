import Image from "next/image"
import Link from "next/link"
import styles from "@/components/home/Home.module.css"
import {
  getAllReviews,
  getFriends,
  getReviewById,
  getReviewsFromUID,
} from "@/database/dbServices"
import { connectDB } from "@/database/db"

export default async function Page() {
  let reviews = []
  // TODO: connect to login functionality
  let loggedIn = false
  let username = "abc"

  try {
    await connectDB()

    if (loggedIn) {
      let friend_ids = await getFriends(username)
      for (let f of friend_ids["friends"]) {
        let r = await getReviewsFromUID(f)
        if (r != null && r[0] != undefined) {
          console.log(r[0])
          reviews.push(r[0])
        }
      }
    } else {
      reviews = await getAllReviews()
    }
  } catch (e) {
    console.log("Error fetching reviews:", e)
  }

  return (
    <main className={styles.page}>
      {reviews.map((item) => (
        <div className={styles.profileCard} key={item._id}>
          <ul className={styles.collections} key={item._id}>
            <li key={item._id}>
              <div className={styles.title}>
                <Link href="/profile">
                  <Image
                    className={styles.avatar}
                    key={item._id}
                    src="/file.svg"
                    width={50}
                    height={50}
                    alt="Picture of the collection"
                  />
                </Link>
                <h2>{item.title}</h2>
              </div>

              <div className={styles.bottomRow}>
                <h2> {item.rating} </h2>

                <div>
                  <h2>{item.title}</h2>
                  <h5>{item.author}</h5>
                  <p> {item.review_text} </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </main>
  )
}
