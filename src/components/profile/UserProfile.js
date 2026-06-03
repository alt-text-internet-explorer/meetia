import Link from "next/link"
import Image from "next/image"
import styles from "@/components/profile/UserProfile.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const collections = [
  {
    id: 1,
    title: "First test",
    description: "This test collection has some data",
    src: "/file.svg",
    alt: "Collection 1",
  },
  {
    id: 2,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 3,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 4,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 5,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 6,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 7,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 8,
    title: "Collection Title",
    src: "/file.svg",
    alt: "Collection 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
]

// TODO: sync with backend (see Home.js for an example)
const colorType = {
  genre1: "bg-warning-subtle",
  genre2: "bg-success-subtle",
  genre3: "bg-danger-subtle",
  genre4: "bg-info-subtle",
  genre5: "bg-primary-subtle",
  genre6: "bg-secondary-subtle",
}

export default function Page({ id }) {
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
            <div className="flex-shrink-0 me-3">
              <Image
                className="rounded-circle"
                src="/file.svg"
                width={200}
                height={200}
                alt="Picture of the collection"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="overflow-y-auto h-100">
              <h5>Username Profile</h5>
              <p
                className="card-text text-secondary"
                style={{ fontSize: "0.8rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
                sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
                sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
                sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
                sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
                sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
                sapien sem, sit amet convallis sapien consequat quis.
                Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci
                magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed
                dignissim risus sit amet lorem malesuada congue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {collections.map((item) => (
            <div className="col" key={item.id}>
              <Link href={`/collections/${item.id}`}>
                <div
                  className="card shadow-sm rounded-2 overflow-hidden h-100"
                  style={{ maxWidth: "500px", maxHeight: "200px" }}
                >
                  <div className="container-fluid p-1 bg-primary text-white text-center"></div>

                  <div className="card-group h-100">
                    <div
                      className="card border-0"
                      style={{ maxWidth: "125px" }}
                    >
                      <div className="card-body p-2 d-flex align-items-center">
                        <Image
                          className="rounded-2"
                          src="/file.svg"
                          width={110}
                          height={150}
                          alt="Picture of the collection"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>

                    <div className="card border-0 px-1">
                      <div
                        className="card-body overflow-y-auto"
                        style={{ height: "150px" }}
                      >
                        <h4 className="card-title h5 mb-1">{item.title}</h4>
                        <h6 className="card-subtitle text-muted small mb-2">
                          Genre
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
          ))}
        </div>
      </div>
    </main>
  )
}
