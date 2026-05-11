import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link to="/">Home</Link>
      </ul>
    </nav>
  );
}
export default NavBar