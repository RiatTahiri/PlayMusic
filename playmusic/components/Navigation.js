import Link from "next/Link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation_bar}>
        <h4>Play Music</h4>
        <ul className={styles.navigation_bar_ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/browse">Browse</Link>
          </li>
          <li>
            <Link href="/playlists">Playlist</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
