import Image from "next/image"
import styles from "@/components/media/Media.module.css"

// FIXME - SYCHRONIZE WITH BACKEND INSTEAD
const media = {
  id: 1,
  title: "Media",
  src: "/file.svg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio dolor. Proin sit amet urna ligula. Ut accumsan hendrerit ligula a feugiat. Proin placerat sem nec ullamcorper ornare. Quisque est lorem, bibendum at enim at, vestibulum posuere purus. Aenean volutpat iaculis odio a suscipit. Ut euismod dolor sed malesuada tincidunt. Nulla at gravida tellus. Praesent non nisl non erat iaculis accumsan. Phasellus at libero metus. Mauris auctor mi a purus varius, eget pharetra justo egestas. Quisque ac quam aliquam, volutpat sapien vitae, consectetur sem. Praesent ut condimentum mi. Proin imperdiet orci dolor, a posuere leo tincidunt ut. Quisque eleifend elit sit amet velit mattis, luctus consectetur nulla fringilla. Fusce vel metus est. Nullam tempor dolor in convallis dignissim. Sed auctor viverra augue, et vulputate eros ullamcorper et. Donec euismod mattis velit a porttitor. Mauris enim velit, efficitur ut sem vel, pretium tempor turpis. Curabitur ultricies sollicitudin elit gravida consectetur. Pellentesque blandit, neque eget condimentum facilisis, mauris quam lacinia nunc, vel scelerisque eros dui nec nibh. In nec purus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus bibendum ipsum et justo convallis, non consectetur eros efficitur. Mauris a viverra purus, nec ullamcorper nibh. Quisque ac pretium ligula. Donec sed orci nec sapien tempor semper. Quisque varius nunc et rutrum sollicitudin. Nunc dapibus blandit purus vitae vulputate. Cras sit amet sem id augue pellentesque ornare ut quis massa. Quisque tempus euismod lacus, eget consequat libero bibendum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut lorem sapien, ullamcorper sed scelerisque a, aliquam at neque. Vestibulum sed est nec nisi bibendum efficitur aliquam non tellus. Duis et mi scelerisque, consectetur lacus ac, aliquet nunc. Sed quis ligula massa. Pellentesque eget fringilla ex. Nullam ut dictum lorem. Nam eget magna cursus libero cursus pellentesque sit amet sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent convallis justo molestie nunc pharetra dapibus. Suspendisse in suscipit velit. Donec dictum tortor nec tristique placerat. Aliquam sapien erat, tincidunt ac semper in, scelerisque et nisl. Proin non commodo libero. Fusce ligula ligula, fringilla non justo quis, tempor vehicula arcu. Praesent ultricies mi vel leo efficitur pretium. Integer purus augue, euismod vitae magna sit amet, faucibus consequat odio. Nulla nunc nibh, aliquam a lacus non, pellentesque accumsan ligula. Vivamus bibendum enim a diam dapibus, at tristique nisl blandit. Nunc eu varius urna. Quisque tincidunt dolor nec nunc sagittis, vel placerat est fringilla. Praesent in mi quis quam dapibus placerat. Nullam nec tortor pretium, tincidunt lacus et, interdum quam. Etiam enim sem, sagittis eu tellus sit amet, varius tincidunt elit. Quisque vitae rhoncus est. Phasellus et mauris eget dui malesuada vulputate eget non elit. Mauris vulputate mauris ac risus viverra, sit amet euismod metus accumsan. Nam sit amet neque dui. Cras fermentum euismod sollicitudin. Nam malesuada velit fringilla libero fermentum varius. Nulla risus mi, ultricies ac ligula eu, malesuada scelerisque ipsum. Phasellus auctor, magna ac aliquam placerat, dui mauris fermentum urna, a vestibulum odio ex in enim. Nulla suscipit tempor orci a dignissim. Morbi sit amet leo ac orci aliquam dignissim vitae non tortor. ",
  alt: "Collection 1",
}

export default function Page({ id }) {
  return (
    <main className={styles.page}>
      <div className={styles.titleCard}>
        <Image
          src="/file.svg"
          width={100}
          height={100}
          alt="Picture of the user"
          className={styles.image}
        />
        <div>
          <h1>
            <i>Collection Title {id}</i>
          </h1>
          <h1>
            <i>Author</i>
          </h1>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <h5>Review</h5>
        <textarea
          className={styles.reviewBox}
          placeholder="Empty review!"
          value={media.description}
          readOnly
        />
      </div>
    </main>
  )
}
