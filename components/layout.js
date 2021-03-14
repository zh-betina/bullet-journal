import styles from "./layout.module.css";
import Bgr from "./bgr";

export default function Layout({ children }) {
    return (
        <Bgr>
            <div className={styles.layout}>{children}</div>
        </Bgr>
    )
}