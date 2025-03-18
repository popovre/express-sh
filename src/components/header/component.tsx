import { NavLink } from "react-router-dom"
import styles from "./style.module.scss"

const Header = () => {
  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/">
          {({ isActive }) => (
            <button className={styles.button} disabled={isActive}>
              Home
            </button>
          )}
        </NavLink>
        <NavLink className={styles.link} to="/categories">
          {({ isActive }) => (
            <button className={styles.button} disabled={isActive}>
              Categories
            </button>
          )}
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
