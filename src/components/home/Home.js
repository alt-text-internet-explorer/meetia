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
    <main>
      <div className="row">
        <div className="col">1 of 3</div>

        <div className="col col-md-5">
          {reviews.map((item) => (
            <div
              className="card mb-5 shadow-sm rounded-2 overflow-hidden"
              style={{ maxWidth: "700px" }}
              key={item._id}
            >
              <div className="container-fluid p-1 mb-1 bg-primary text-white text-center"></div>

              <div className="card-header mb-2">
                Genre / Topic, or something else here?
              </div>

              <div className="d-flex px-3 align-items-center">
                <Image
                  className="rounded-2"
                  src="/file.svg"
                  width={50}
                  height={50}
                  alt="Picture of the collection"
                />
                <div className="px-1">
                  <h4 className="card-title">{item.title}</h4>
                  <h4 className="card-title">{item._id.toString()}</h4>
                  <h6 className="card-subtitle text-muted">Review Score: {item.rating}</h6>
                </div>
              </div>

              <hr></hr>

              <div className="card-group">
                <div className="card border-0" style={{ maxWidth: "150px" }}>
                  <div className="card-body">
                    <Image
                      className="rounded-2"
                      src="/file.svg"
                      width={150}
                      height={200}
                      alt="Picture of the collection"
                    />
                  </div>
                </div>
                <div className="card border-0 px-2">
                  <div className="card-body">
                    <h4 className="card-title">{item._title}</h4>
                    <h6 className="card-subtitle text-muted">
                      by {item.author}
                    </h6>
                    <p className="card-text">{item.review_text}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi tincidunt sapien sem, sit amet convallis sapien
                      consequat quis. Suspendisse aliquet pulvinar urna eu
                      congue. Suspendisse orci magna, aliquam ut vestibulum
                      eget, pellentesque ac leo. Sed dignissim risus sit amet
                      lorem malesuada congue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text">{item.review_text}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tincidunt sapien sem, sit amet convallis sapien consequat
                  quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse
                  orci magna, aliquam ut vestibulum eget, pellentesque ac leo.
                  Sed dignissim risus sit amet lorem malesuada congue. Morbi non
                  tincidunt mi. Morbi eleifend eget velit ut aliquam. Quisque
                  condimentum quam ligula, quis pharetra tortor pretium tempor.
                  Vestibulum ornare commodo ante, at blandit felis tempor vitae.
                  Sed vitae nisl vestibulum, molestie lectus ac, tempor orci.
                  Maecenas sodales faucibus pulvinar. Proin feugiat felis
                  viverra mi porta, eleifend dignissim felis tempus.
                </p>
              </div>

              <div className="card-footer">
                <div className="input-group">
                  <Image
                    className="m-2 rounded-2"
                    src="/globe.svg"
                    width={25}
                    height={25}
                    alt="Picture of the collection"
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write a comment..."
                  ></input>

                  <div className="input-group-append px-2">
                    <a href="#" className="btn btn-primary">
                      Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col">3 of 3</div>
      </div>
    </main>
  )
}

/*
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
*/
