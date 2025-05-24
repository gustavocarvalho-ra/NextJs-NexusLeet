import styles from "./page.module.css";
import RegisterPage from "./userregister/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <RegisterPage />
    </div>
  );
}
