import Image from "next/image"
import Link from "next/link"
import styles from "@/components/collections/Collections.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const collections = [
  {
    id: 1,
    title: "Lorem ipsum Review",
    src: "/file.svg",
    alt: "Collection 1",
    subtitle: "5 stars Lorem ipsum!",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sapien sem, sit amet convallis sapien consequat quis. Suspendisse aliquet pulvinar urna eu congue. Suspendisse orci magna, aliquam ut vestibulum eget, pellentesque ac leo. Sed dignissim risus sit amet lorem malesuada congue.",
  },
  {
    id: 2,
    title: "Media",
    src: "/file.svg",
    alt: "Collection 1",
    subtitle: "Genre",
    summary: "second summary",
  },
  {
    id: 3,
    title: "Media",
    src: "/file.svg",
    alt: "Collection 1",
    subtitle: "Genre",
    summary: "yet another summary1.",
  },
  {
    id: 4,
    title: "Media",
    src: "/file.svg",
    alt: "Collection 1",
    subtitle: "Genre",
    summary: "yet another summary2.",
  },
  {
    id: 5,
    title: "Media",
    src: "/file.svg",
    alt: "Collection 1",
    subtitle: "Genre",
    summary: "yet another summary3.",
  },
]

export default function Page({ id }) {
  return (
    <main>
      <div className="container py-4">
        <div
          className="card card border-0 shadow-sm overflow-hidden p-3"
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
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="overflow-y-auto h-100">
              <h5>Collection</h5>
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
        <div className="row row-cols-1 g-4">
          {collections.map((item) => (
            <div className="col" key={item.id}>
              <Link href={`/media/${item.id}`}>
                <div
                  className="card shadow-sm rounded-2 overflow-hidden h-100"
                  style={{ maxHeight: "200px" }}
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
                          {item.subtitle}
                        </h6>
                        <p
                          className="card-text text-secondary"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {item.summary}
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
