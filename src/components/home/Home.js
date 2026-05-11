import Image from "next/image"
import Link from "next/link"
import styles from "@/components/home/Home.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const profileCard = [
  {
    id: 1,
    title: "Title",
    author: "Author",
    name: "Name",
    src: "/file.svg",
    alt: "Collection 1",
  },
  {
    id: 2,
    title: "Title",
    author: "Author",
    name: "Name",
    src: "/file.svg",
    alt: "Collection 1",
  },
  {
    id: 3,
    title: "Title",
    author: "Author",
    name: "Name",
    src: "/file.svg",
    alt: "Collection 1",
  },
  {
    id: 4,
    title: "Title",
    author: "Author",
    name: "Name",
    src: "/file.svg",
    alt: "Collection 1",
  },
]

export default function Page() {
  return (
    <main className={styles.page}>
      {profileCard.map((item) => (
        <div className={styles.profileCard} key={item.id}>
          <ul className={styles.collections} key={item.id}>
            <li key={item.id}>
              <div className={styles.title}>
                <Image
                  className={styles.avatar}
                  key={item.id}
                  src="/file.svg"
                  width={50}
                  height={50}
                  alt="Picture of the collection"
                />
                <h2>{item.name}</h2>
              </div>

              <div className={styles.bottomRow}>
                <div className={styles.emptyBoxHorizontal}></div>

                <div>
                  <h2>{item.title}</h2>
                  <Link href="/profile">
                    <h5>{item.author}</h5>
                  </Link>
                  <div className={styles.emptyBoxVertical}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </main>
  )
}
