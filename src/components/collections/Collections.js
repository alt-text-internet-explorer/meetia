import Image from "next/image"
import Link from "next/link"
import styles from "@/components/collections/Collections.module.css"
import { connectDB } from "@/database/db"
import { getCollectionById } from "@/database/dbServices"

export default async function Page({ id }) {
  await connectDB()
  const collection = await getCollectionById(id)

  if (!collection) {
    return (
      <div>
        <p>No collection yet, get started!</p>
        <Link type="button" href="/collection-form" className={styles.button}>
          New Collection
        </Link>
      </div>
    )
  }

  return (
    <main>
      <div className="container py-4">
        <div
          className="card border-0 shadow-sm overflow-hidden p-3"
          style={{ height: "200px" }}
        >
          <div className="d-flex flex-row h-100 align-items-center">
            <div className="flex-shrink-0 me-3">
              <Image
                className="rounded-2"
                src="/file.svg"
                width={200}
                height={200}
                alt="Picture of the collection"
              />
            </div>

            <div className="overflow-y-auto h-100">
              <h5>{collection.title}</h5>

              <p className="card-text text-secondary">
                {collection.description}
              </p>

              <small className="text-muted">{collection.genre}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row row-cols-1 g-4">
          {collection.reviews.map((review) => (
            <div className="col" key={review._id.toString()}>
              <Link href={`/media/${review._id}`}>
                <div className="card shadow-sm rounded-2 overflow-hidden h-100">
                  <div className="card-body">
                    <h4>{review.title}</h4>

                    <h6 className="text-muted">by {review.author}</h6>

                    <p>{review.review_text}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
