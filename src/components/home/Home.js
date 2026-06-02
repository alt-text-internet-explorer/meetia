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

  const colorType = {
    article: "bg-warning-subtle",
    book: "bg-success-subtle",
    movie: "bg-danger-subtle",
    music: "bg-info-subtle",
    podcast: "bg-primary-subtle",
    tv_show: "bg-secondary-subtle",
  }

  return (
    <main>
      <div className={styles.collections}>
        <div className="col col-md-5">
          {reviews.map((item) => (
            <div
              className="card mb-5 shadow-sm rounded-2 overflow-hidden"
              style={{ maxWidth: "700px" }}
              key={item._id}
            >
              <div
                className={`container-fluid p-1 mb-1 bg-primary text-white text-center ${colorType[item.type.toLowerCase()]}`}
              ></div>

              <div className="card-header mb-2 d-flex justify-content-between align-items-center">
                <span>{item.type}</span>
                <span>@{item.username}</span>
              </div>

              <div className="card-group">
                <div className="card border-0 w-100">
                  <div className="d-flex flex-column px-3 align-items-start mb-0">
                    <h4 className="card-title">{item.title}</h4>
                    <h6 className="fs-5 mb-0" style={{ color: "#e87400" }}>
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </h6>
                  </div>
                </div>

                <div className="card border-0 px-3 w-100 text-end">
                  <div className="px-0">
                    <Image
                      className="rounded-2"
                      src="/file.svg"
                      width={50}
                      height={50}
                      alt="Picture of the collection"
                    />
                    <h6 className="card-title fs-8 align-items-center mb-0">
                      {item._id.toString()}
                    </h6>
                  </div>
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
                    <p className="card-text">synopsis of book goes here?</p>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text">{item.review_text}</p>
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
      </div>
    </main>
  )
}
