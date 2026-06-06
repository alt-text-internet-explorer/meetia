"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "@/components/home/Home.module.css"
import { addAuthHeader } from "@/utils/authFetch"
import { useEffect, useState } from "react"

export default function Page() {
  // fetch reviews
  const [reviews, setReviews] = useState([])
  const [commentText, setCommentText] = useState("")

  useEffect(() => {
    async function loadReviews() {
      try {
        let response = await fetch("/api/getReviews", {
          method: "GET",
          headers: addAuthHeader(),
        })
        const data = await response.json()
        setReviews(data.reviews)
      } catch (error) {
        // Handle error
        console.error("Error fetching reviews:", error)
      }
    }
    loadReviews()
  }, [])

  async function postComment(reviewId) {
    try {
      const response = await fetch("/api/postComment", {
        method: "POST",
        headers: addAuthHeader(),
        body: JSON.stringify({
          comment: commentText.trim(),
          rev_id: reviewId,
        }),
      })
      const data = await response.json()
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId
            ? {
                ...review,
                comments: [...(review.comments || []), data.comment],
              }
            : review,
        ),
      )
      setCommentText("")
    } catch (error) {
      console.error("Error posting comment:", error)
    }
  }

  const colorType = {
    article: "bg-warning-subtle",
    book: "bg-success-subtle",
    movie: "bg-danger-subtle",
    music: "bg-info-subtle",
    podcast: "bg-primary-subtle",
    "tv show": "bg-success",
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
              <Link href={`/media/${item._id}`}>
                <div
                  className={`container-fluid p-1 mb-1 bg-primary text-white text-center ${colorType[item.type.toLowerCase()]}`}
                ></div>

                <div className="card-header mb-2 d-flex justify-content-between align-items-center">
                  <span>{item.type}</span>
                  <span>
                    @{item.display_name ? item.display_name : item.username}
                  </span>
                </div>

                <div className="card-group">
                  <div className="card border-0 w-100">
                    <div className="d-flex flex-column px-3 align-items-start mb-0">
                      <h4 className="card-title">{item.title}</h4>
                      <h6 className="card-subtitle text-muted">
                        by {item.author}
                      </h6>
                      <h6 className="fs-5 mb-0" style={{ color: "#e87400" }}>
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </h6>
                    </div>
                  </div>
                </div>
              </Link>
              <hr></hr>

              <div className="card-body">
                <p className="card-text">{item.review_text}</p>
              </div>

              <div className="card-footer">
                <div className="mb-3">
                  {item.comments?.map((comment, index) => (
                    <div key={index} className="border rounded p-2 mb-2">
                      {comment}
                    </div>
                  ))}
                </div>

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
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  ></input>

                  <button
                    className={styles.button}
                    onClick={() => postComment(item._id)}
                    disabled={!commentText.trim()}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
