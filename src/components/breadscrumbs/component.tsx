import { useLocation, Link } from "react-router-dom"
import styles from "./styles.module.scss"

const Breadcrumbs = () => {
  const location = useLocation()

  const { pathname } = location

  // Получите текущий путь и соответствующие метки
  const pathnames = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="breadcrumb" className={styles.root}>
      <h3 className={styles.title}>Breadcrumbs:</h3>
      <ul className={styles.breadscrumbs}>
        {pathnames.map((current, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`
          const isLast = index === pathnames.length - 1

          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              <Link to={path}>{current}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
