import type { RootState } from "@reduxjs/toolkit/query"
import { useSelector } from "react-redux"
import { getCategoriesEntity, getEntityByPath } from "../../redux/categories"
import CategoryMemoized from "../../components/category/component"
import styles from "./style.module.scss"
import { useLocation } from "react-router-dom"

const CategoryPage = () => {
  const location = useLocation()

  console.log(location.pathname, "location")

  const category = useSelector((state: RootState) =>
    getEntityByPath(state, {
      payload: location.pathname,
      type: "get",
    }),
  )

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Category page</h2>
      {!!category && <CategoryMemoized category={category} />}
    </div>
  )
}

export default CategoryPage
