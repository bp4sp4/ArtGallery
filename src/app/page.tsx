import "../app/globals.css";
import styles from "../app/page.module.css";
import Images from "../../public/components/imges";

export default function Tomato() {
  return (
    <div>
      <h1 className={styles.title}>ArtGallery</h1>
      <Images />
    </div>
  );
}
