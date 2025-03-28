import { Outlet } from "react-router-dom"
import styles from "./style.module.scss"
import Header from "../components/header/component"

const Layout = () => {
  return (
    <div className={styles.root}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
