import { memo } from "react"
import styles from "./styles.module.scss"
import RouteLinks from "./route-links/component"
import type { CategoryType } from "../../types"

export interface CategoryProps {
  category: CategoryType
}

const CategoryMemoized = ({ category }: CategoryProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.name}>name: {category.name}</h1>
      <div>id: {category.id}</div>
      <div>slug: {category.slug}</div>
      <div className={styles.children}>
        <p>children:</p>
        {category.children && <RouteLinks categories={category.children} />}
      </div>
    </div>
  )
}

export default memo(CategoryMemoized)
