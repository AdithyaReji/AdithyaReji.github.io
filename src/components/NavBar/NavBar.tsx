import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Button>
        <Link to="/about">About</Link>
      </Button>
    </nav>
  );
}
export default NavBar