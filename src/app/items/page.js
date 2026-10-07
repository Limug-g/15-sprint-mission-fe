import { ItemBestSection } from "@/components/ItemBestSection";
import { ItemListSection } from "@/components/ItemListSection";
import * as styles from "@/styles/items.css";

export default function ItemsPage() {
  return (
    <div className={styles.pageWrapper}>
      <ItemBestSection />
      <ItemListSection />
    </div>
  );
}