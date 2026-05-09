import Link from "next/link"
import Image from "next/image"
import styles from "@/components/profile/UserProfile.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const collections = [
  { id: 1, title: "test title", src: "/file.svg", alt: "Collection 1" },
  { id: 2, title: "test title", src: "/file.svg", alt: "Collection 1" },
  { id: 3, title: "test title", src: "/file.svg", alt: "Collection 1" },
  { id: 4, title: "test title", src: "/file.svg", alt: "Collection 1" },
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
          className={styles.avatar}
        />
        <h1>Username Profile</h1>
      </div>
      <div>
        <ul className={styles.collections}>
          {collections.map((item) => (
            <li key={item.id}>
              <Image
                key={item.id}
                src="/file.svg"
                width={25}
                height={25}
                alt="Picture of the collection"
              />
              &emsp;
              <Link href="/collections">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
