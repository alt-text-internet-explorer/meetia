import Image from "next/image"
import styles from "@/components/media/Media.module.css"
import { connectDB } from "@/database/db"
import { getReviewById } from "@/database/dbServices"

export default async function Page({ id }) {
  await connectDB()

  const review = await getReviewById(id)

  const colorType = {
    article: "bg-warning-subtle",
    book: "bg-success-subtle",
    movie: "bg-danger-subtle",
    music: "bg-info-subtle",
    podcast: "bg-primary-subtle",
    "tv show": "bg-secondary-subtle",
  }

  return (
    <main>
      <div className="container py-4">
        <div className="card-group">
          <div className="card border-0 w-100">
            <div
              className={`container-fluid p-1 mb-1 bg-primary text-white text-center ${colorType[review.type.toLowerCase()]}`}
            ></div>

            <div className="card-header mb-2 d-flex justify-content-between align-items-center">
              <span>{review.type}</span>
              <span>
                @{review.display_name ? review.display_name : review.username}
              </span>
            </div>
            <div className="d-flex flex-column px-3 align-items-start mb-0">
              <h4 className="card-title">{review.title}</h4>
              <h6 className="card-subtitle text-muted">by {review.author}</h6>
              <h6 className="fs-5 mb-0" style={{ color: "#e87400" }}>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </h6>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="row row-cols-1 g-4">
          <div className="col">
            <div className="card border-0 rounded-2 overflow-hidden h-100">
              <div className="card border-0 px-1">
                <div className="card-body overflow-y-auto">
                  <h6 className="text-dark-emphasis card-subtitle mb-2">
                    {review.review_text}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
