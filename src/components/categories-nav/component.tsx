import { useSelector } from "react-redux"
import { getCategoriesEntity } from "../../redux/categories"
import type { RootState } from "@reduxjs/toolkit/query"
import { Link, useLocation } from "react-router-dom"
import type { CategoryType } from "../../types"
import styles from "./styles.module.scss"
import clsx from "clsx"

const CategoriesNav = () => {
  const data = useSelector((state: RootState) => getCategoriesEntity(state))
  const location = useLocation()
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Категории:</h3>
      <div>
        {data.map((category: CategoryType) => (
          <Link
            className={clsx({
              [styles.active]: location.pathname
                .split("/")
                .includes(category.slug),
            })}
            key={"key" + category.slug}
            to={`./${category.slug}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoriesNav
