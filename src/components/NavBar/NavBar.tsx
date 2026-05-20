import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/about" className={styles.navLink}>
        About
      </Link>
    </nav>
  );
}
export default NavBar