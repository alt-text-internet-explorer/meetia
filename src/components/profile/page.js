import Link from "next/link"
import Image from "next/image"
import styles from "@/components/profile/UserProfile.module.css"
import { Style, Avatar } from "@dicebear/core"
import definition from "@dicebear/styles/fun-emoji.json" with { type: "json" }

import {
  getAllCollectionsFromOwner,
  getUserByUsername,
} from "@/database/dbServices"
import { connectDB } from "@/database/db"

export default async function Page({ params }) {
  const { username } = await params
  const style = new Style(definition)
  const avatar = new Avatar(style, {
    seed: username,
  })

  const svg = avatar.toString()

  await connectDB()
  const user = await getUserByUsername(username)

  let disp = user.displayName

  let bio = user.bio

  if (bio == undefined) {
    bio = "Enter your bio here"
  }

  if (!user) {
    return <div>User Not Found</div>
  }
  const collections = await getAllCollectionsFromOwner(user._id)

  // currently doesnt work properly since I assigned colorType to the string genre
  const colorType = {
    article: "bg-warning-subtle",
    book: "bg-success-subtle",
    movie: "bg-danger-subtle",
    music: "bg-info-subtle",
    podcast: "bg-primary-subtle",
    "tv show": "bg-secondary-subtle",
    "no genre": "bg-dark-subtle",
  }

  return (
    <main>
      <div className={styles.header}>
        <Link type="button" href="/customize-profile" className={styles.button}>
          Edit profile
        </Link>
        <Link type="button" href="/collection-form" className={styles.button}>
          New Collection
        </Link>
      </div>
      <div className="container py-4">
        <div
          className="card border-0 shadow-sm overflow-hidden p-3"
          style={{ height: "200px" }}
        >
          <div className="d-flex flex-row h-100 align-items-center">
            <div
              className="flex-shrink-0 me-3"
              style={{ width: "150px", height: "150px" }}
              dangerouslySetInnerHTML={{ __html: svg }}
            />

            <div className="overflow-y-auto h-100">
              <h5>{disp}</h5>
              <p
                className="card-text text-secondary"
                style={{ fontSize: "0.8rem" }}
              >
                {bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {collections && collections.length > 0 ? (
            collections.map((item) => (
              <div className="col" key={item._id.toString()}>
                <Link href={`/collections/${item._id}`}>
                  <div
                    className="card shadow-sm rounded-2 overflow-hidden h-100"
                    style={{ maxWidth: "500px", maxHeight: "200px" }}
                  >
                    <div
                      className={`container-fluid p-1 bg-primary-subtle text-white text-center ${colorType[item.genre.toLowerCase()]}`}
                    ></div>

                    <div className="card-group h-100">
                      <div className="card border-0 px-1">
                        <div
                          className="card-body overflow-y-auto"
                          style={{ height: "150px" }}
                        >
                          <h4 className="card-title h5 mb-1">{item.title}</h4>

                          <h6 className="card-subtitle text-muted small mb-2">
                            {item.genre}
                          </h6>

                          <p
                            className="card-text text-secondary"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col">
              <div
                className="card shadow-sm rounded-2 overflow-hidden h-100 text-center p-4"
                style={{ maxWidth: "500px", minHeight: "200px" }}
              >
                <h4 className="h5 mb-2">No collections yet</h4>

                <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
                  Create your first collection to organize your reviews.
                </p>

                <Link href="/collection-form" className={styles.button}>
                  New Collection
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
