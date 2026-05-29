import Image from "next/image"
import styles from "@/components/media/Media.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const collections = [
  { id: 0, title: "No", reviewDescription: "Nothing here..." },
  {
    id: 1,
    title: "Lorem Ipsum",
    subtitle: "by Lorem",
    rating: "★★★★★",
    reviewTitle: "Book review!",
    reviewSubtitle: "Format: Hardcover",
    reviewRating: "★★★★☆",
    src: "/file.svg",
    alt: "Collection 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula.",
    reviewDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Ut accumsan hendrerit ligula a feugiat. Proin placerat sem nec ullamcorper ornare. Quisque est lorem, bibendum at enim at, vestibulum posuere purus. Aenean volutpat iaculis odio a suscipit. Ut euismod dolor sed malesuada tincidunt. Nulla at gravida tellus. Praesent non nisl non erat iaculis accumsan. Phasellus at libero metus. Mauris auctor mi a purus varius, eget pharetra justo egestas. Quisque ac quam aliquam, volutpat sapien vitae, consectetur sem. Praesent ut condimentum mi. Proin imperdiet orci dolor, a posuere leo tincidunt ut. Quisque eleifend elit sit amet velit mattis, luctus consectetur nulla fringilla. Fusce vel metus est. Nullam tempor dolor in convallis dignissim. Sed auctor viverra augue, et vulputate eros ullamcorper et. Donec euismod mattis velit a porttitor. Mauris enim velit, efficitur ut sem vel, pretium tempor turpis. Curabitur ultricies sollicitudin elit gravida consectetur. Pellentesque blandit, neque eget condimentum facilisis, mauris quam lacinia nunc, vel scelerisque eros dui nec nibh. In nec purus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus bibendum ipsum et justo convallis, non consectetur eros efficitur. Mauris a viverra purus, nec ullamcorper nibh. Quisque ac pretium ligula. Donec sed orci nec sapien tempor semper. Quisque varius nunc et rutrum sollicitudin. Nunc dapibus blandit purus vitae vulputate. Cras sit amet sem id augue pellentesque ornare ut quis massa. Quisque tempus euismod lacus, eget consequat libero bibendum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lorem sapien, ullamcorper sed scelerisque a, aliquam at neque. Vestibulum sed est nec nisi bibendum efficitur aliquam non tellus. Duis et mi scelerisque, consectetur lacus ac, aliquet nunc. Sed quis ligula massa. Pellentesque eget fringilla ex. Nullam ut dictum lorem. Nam eget magna cursus libero cursus pellentesque sit amet sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent convallis justo molestie nunc pharetra dapibus. Suspendisse in suscipit velit. Donec dictum tortor nec tristique placerat. Aliquam sapien erat, tincidunt ac semper in, scelerisque et nisl. Proin non commodo libero. Fusce ligula ligula, fringilla non justo quis, tempor vehicula arcu. Praesent ultricies mi vel leo efficitur pretium. Integer purus augue, euismod vitae magna sit amet, faucibus consequat odio. Nulla nunc nibh, aliquam a lacus non, pellentesque accumsan ligula. Vivamus bibendum enim a diam dapibus, at tristique nisl blandit. Nunc eu varius urna. Quisque tincidunt dolor nec nunc sagittis, vel placerat est fringilla. Praesent in mi quis quam dapibus placerat. Nullam nec tortor pretium, tincidunt lacus et, interdum quam. Etiam enim sem, sagittis eu tellus sit amet, varius tincidunt elit. Quisque vitae rhoncus est. Phasellus et mauris eget dui malesuada vulputate eget non elit. Mauris vulputate mauris ac risus viverra, sit amet euismod metus accumsan. Nam sit amet neque dui. Cras fermentum euismod sollicitudin. Nam malesuada velit fringilla libero fermentum varius. Nulla risus mi, ultricies ac ligula eu, malesuada scelerisque ipsum. Phasellus auctor, magna ac aliquam placerat, dui mauris fermentum urna, a vestibulum odio ex in enim. Nulla suscipit tempor orci a dignissim. Morbi sit amet leo ac orci aliquam dignissim vitae non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Ut accumsan hendrerit ligula a feugiat. Proin placerat sem nec ullamcorper ornare. Quisque est lorem, bibendum at enim at, vestibulum posuere purus. Aenean volutpat iaculis odio a suscipit. Ut euismod dolor sed malesuada tincidunt. Nulla at gravida tellus. Praesent non nisl non erat iaculis accumsan. Phasellus at libero metus. Mauris auctor mi a purus varius, eget pharetra justo egestas. Quisque ac quam aliquam, volutpat sapien vitae, consectetur sem. Praesent ut condimentum mi. Proin imperdiet orci dolor, a posuere leo tincidunt ut. Quisque eleifend elit sit amet velit mattis, luctus consectetur nulla fringilla. Fusce vel metus est. Nullam tempor dolor in convallis dignissim. Sed auctor viverra augue, et vulputate eros ullamcorper et. Donec euismod mattis velit a porttitor. Mauris enim velit, efficitur ut sem vel, pretium tempor turpis. Curabitur ultricies sollicitudin elit gravida consectetur. Pellentesque blandit, neque eget condimentum facilisis, mauris quam lacinia nunc, vel scelerisque eros dui nec nibh. In nec purus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus bibendum ipsum et justo convallis, non consectetur eros efficitur. Mauris a viverra purus, nec ullamcorper nibh. Quisque ac pretium ligula. Donec sed orci nec sapien tempor semper. Quisque varius nunc et rutrum sollicitudin. Nunc dapibus blandit purus vitae vulputate. Cras sit amet sem id augue pellentesque ornare ut quis massa. Quisque tempus euismod lacus, eget consequat libero bibendum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lorem sapien, ullamcorper sed scelerisque a, aliquam at neque. Vestibulum sed est nec nisi bibendum efficitur aliquam non tellus. Duis et mi scelerisque, consectetur lacus ac, aliquet nunc. Sed quis ligula massa. Pellentesque eget fringilla ex. Nullam ut dictum lorem. Nam eget magna cursus libero cursus pellentesque sit amet sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent convallis justo molestie nunc pharetra dapibus. Suspendisse in suscipit velit. Donec dictum tortor nec tristique placerat. Aliquam sapien erat, tincidunt ac semper in, scelerisque et nisl. Proin non commodo libero. Fusce ligula ligula, fringilla non justo quis, tempor vehicula arcu. Praesent ultricies mi vel leo efficitur pretium. Integer purus augue, euismod vitae magna sit amet, faucibus consequat odio. Nulla nunc nibh, aliquam a lacus non, pellentesque accumsan ligula. Vivamus bibendum enim a diam dapibus, at tristique nisl blandit. Nunc eu varius urna. Quisque tincidunt dolor nec nunc sagittis, vel placerat est fringilla. Praesent in mi quis quam dapibus placerat. Nullam nec tortor pretium, tincidunt lacus et, interdum quam. Etiam enim sem, sagittis eu tellus sit amet, varius tincidunt elit. Quisque vitae rhoncus est. Phasellus et mauris eget dui malesuada vulputate eget non elit. Mauris vulputate mauris ac risus viverra, sit amet euismod metus accumsan. Nam sit amet neque dui. Cras fermentum euismod sollicitudin. Nam malesuada velit fringilla libero fermentum varius. Nulla risus mi, ultricies ac ligula eu, malesuada scelerisque ipsum. Phasellus auctor, magna ac aliquam placerat, dui mauris fermentum urna, a vestibulum odio ex in enim. Nulla suscipit tempor orci a dignissim. Morbi sit amet leo ac orci aliquam dignissim vitae non tortor. ",
  },
  {
    id: 2,
    title: "Title",
    subtitle: "Subtitle",
    rating: "★★★★★",
    reviewTitle: "Review title",
    reviewSubtitle: "Subtitle",
    reviewRating: "★★★★★",
    reviewDescription: "Nothing here...",
  },
  { id: 3, title: "Blank!", reviewDescription: "Nothing here..." },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Ut accumsan hendrerit ligula a feugiat. Proin placerat sem nec ullamcorper ornare. Quisque est lorem, bibendum at enim at, vestibulum posuere purus. Aenean volutpat iaculis odio a suscipit. Ut euismod dolor sed malesuada tincidunt. Nulla at gravida tellus. Praesent non nisl non erat iaculis accumsan. Phasellus at libero metus. Mauris auctor mi a purus varius, eget pharetra justo egestas. Quisque ac quam aliquam, volutpat sapien vitae, consectetur sem. Praesent ut condimentum mi. Proin imperdiet orci dolor, a posuere leo tincidunt ut. Quisque eleifend elit sit amet velit mattis, luctus consectetur nulla fringilla. Fusce vel metus est. Nullam tempor dolor in convallis dignissim. Sed auctor viverra augue, et vulputate eros ullamcorper et. Donec euismod mattis velit a porttitor. Mauris enim velit, efficitur ut sem vel, pretium tempor turpis. Curabitur ultricies sollicitudin elit gravida consectetur. Pellentesque blandit, neque eget condimentum facilisis, mauris quam lacinia nunc, vel scelerisque eros dui nec nibh. In nec purus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus bibendum ipsum et justo convallis, non consectetur eros efficitur. Mauris a viverra purus, nec ullamcorper nibh. Quisque ac pretium ligula. Donec sed orci nec sapien tempor semper. Quisque varius nunc et rutrum sollicitudin. Nunc dapibus blandit purus vitae vulputate. Cras sit amet sem id augue pellentesque ornare ut quis massa. Quisque tempus euismod lacus, eget consequat libero bibendum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lorem sapien, ullamcorper sed scelerisque a, aliquam at neque. Vestibulum sed est nec nisi bibendum efficitur aliquam non tellus. Duis et mi scelerisque, consectetur lacus ac, aliquet nunc. Sed quis ligula massa. Pellentesque eget fringilla ex. Nullam ut dictum lorem. Nam eget magna cursus libero cursus pellentesque sit amet sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent convallis justo molestie nunc pharetra dapibus. Suspendisse in suscipit velit. Donec dictum tortor nec tristique placerat. Aliquam sapien erat, tincidunt ac semper in, scelerisque et nisl. Proin non commodo libero. Fusce ligula ligula, fringilla non justo quis, tempor vehicula arcu. Praesent ultricies mi vel leo efficitur pretium. Integer purus augue, euismod vitae magna sit amet, faucibus consequat odio. Nulla nunc nibh, aliquam a lacus non, pellentesque accumsan ligula. Vivamus bibendum enim a diam dapibus, at tristique nisl blandit. Nunc eu varius urna. Quisque tincidunt dolor nec nunc sagittis, vel placerat est fringilla. Praesent in mi quis quam dapibus placerat. Nullam nec tortor pretium, tincidunt lacus et, interdum quam. Etiam enim sem, sagittis eu tellus sit amet, varius tincidunt elit. Quisque vitae rhoncus est. Phasellus et mauris eget dui malesuada vulputate eget non elit. Mauris vulputate mauris ac risus viverra, sit amet euismod metus accumsan. Nam sit amet neque dui. Cras fermentum euismod sollicitudin. Nam malesuada velit fringilla libero fermentum varius. Nulla risus mi, ultricies ac ligula eu, malesuada scelerisque ipsum. Phasellus auctor, magna ac aliquam placerat, dui mauris fermentum urna, a vestibulum odio ex in enim. Nulla suscipit tempor orci a dignissim. Morbi sit amet leo ac orci aliquam dignissim vitae non tortor.",
  },
]

export default function Page({ id }) {
  let media = collections.find((item) => item.id == id)

  if (!media) {
    media = collections[0]
  }

  return (
    <main>
      <div className="container py-4">
        <div
          className="card border-0 overflow-hidden p-3"
          style={{ height: "250px" }}
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

            <div className="overflow-y-auto h-100 pe-2">
              <h1 className="fw-bold h2 mb-1">{media.title}</h1>
              <p className="fs-5 text-secondary mb-1">{media.subtitle}</p>
              <p className="fs-5 mb-1" style={{ color: "#e87400" }}>
                {media.rating}
              </p>
              <p className="text-dark-emphasis" style={{ fontSize: "0.8rem" }}>
                {media.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="container py-4">
        <div className="row row-cols-1 g-4">
          <div className="col">
            <div className="card border-0 rounded-2 overflow-hidden h-100">
              <div className="card-group h-100">
                <div className="card border-0" style={{ maxWidth: "125px" }}>
                  <div className="card-body p-2 d-flex align-items-start">
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
                  <div className="card-body overflow-y-auto">
                    <h4
                      className="card-title h5 fs-5 mb-1"
                      style={{ color: "#e87400" }}
                    >
                      {media.reviewRating}{" "}
                      <span style={{ color: "#333333" }}>
                        {media.reviewTitle}
                      </span>
                    </h4>
                    <h6 className="card-subtitle text-muted small mb-2">
                      {media.reviewSubtitle}
                    </h6>
                    <p
                      className="card-text text-dark-emphasis"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {media.reviewDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
