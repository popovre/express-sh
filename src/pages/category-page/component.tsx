import type { RootState } from "@reduxjs/toolkit/query"
import { useSelector } from "react-redux"
import { getEntityByPath } from "../../redux/categories"
import CategoryMemoized from "../../components/category/component"
import styles from "./style.module.scss"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"

const CategoryPage = () => {
  const location = useLocation()

  const category = useSelector((state: RootState) =>
    getEntityByPath(state, {
      payload: location.pathname,
      type: "get",
    }),
  )

  return (
    <div className={styles.root}>
      <Helmet>
        <meta name="robots" content={category?.index ? "index" : "noindex"} />
      </Helmet>
      <h2 className={styles.title}>Category page</h2>
      {!!category && <CategoryMemoized category={category} />}
    </div>
  )
}

export default CategoryPage
