import { useSelector } from "react-redux"
import { getCategoriesEntity } from "../../redux/categories"
import type { RootState } from "@reduxjs/toolkit/query"
import { Link } from "react-router-dom"
import type { CategoryType } from "../../types"
import styles from "./styles.module.scss"

const CategoriesNav = () => {
  const data = useSelector((state: RootState) => getCategoriesEntity(state))
  console.log(data, "categories entity")
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Категории:</h3>
      <div>
        {data.map((category: CategoryType) => (
          <Link key={"key" + category.slug} to={`./${category.slug}`}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoriesNav
