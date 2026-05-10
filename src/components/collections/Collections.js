import Image from "next/image"
import styles from "@/components/collections/Collections.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const collections = [
  { id: 1, title: "Media", src: "/file.svg", alt: "Collection 1" },
  { id: 2, title: "Media", src: "/file.svg", alt: "Collection 1" },
  { id: 3, title: "Media", src: "/file.svg", alt: "Collection 1" },
  { id: 4, title: "Media", src: "/file.svg", alt: "Collection 1" },
  { id: 4, title: "Media", src: "/file.svg", alt: "Collection 1" },
]

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.profileCard}>
        <Image
          src="/file.svg"
          width={100}
          height={100}
          alt="Picture of the user"
          className={styles.image}
        />
        <h1>Collection Title</h1>
      </div>
      <div>
        <ul className={styles.collections}>
          {collections.map((item) => (
            <li key={item.id}>
              <Image
                key={item.id}
                src="/file.svg"
                width={50}
                height={50}
                alt="Picture of the collection"
                className={styles.image}
              />
              <h2>{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
