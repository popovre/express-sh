import { Link, NavLink } from "react-router-dom"
import styles from "./style.module.scss"

const Header = () => {
  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/user">
          {({ isActive }) => (
            <button className={styles.button} disabled={isActive}>
              User
            </button>
          )}
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
