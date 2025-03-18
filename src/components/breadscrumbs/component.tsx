import { useLocation, Link } from "react-router-dom"
import styles from "./styles.module.scss"
import clsx from "clsx"

const Breadcrumbs = () => {
  const location = useLocation()

  const { pathname } = location

  const pathnames = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="breadcrumb" className={styles.root}>
      <h3 className={styles.title}>Breadcrumbs:</h3>
      {pathnames.length > 1 && (
        <Link
          className={styles.backButton}
          to={`/${pathnames.slice(0, -1).join("/")}`}
        >
          Назад
        </Link>
      )}
      <ul className={styles.breadscrumbs}>
        {pathnames.map((current, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`
          const isLast = index === pathnames.length - 1

          return (
            <li key={index}>
              <Link to={path} className={clsx({ [styles.active]: isLast })}>
                {current}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
