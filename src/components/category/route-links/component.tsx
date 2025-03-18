import { Link, useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import type { CategoriesType, CategoryType } from "../../../types"

export interface RouteLinksProps {
  categories: CategoriesType
}

const RouteLinks = ({ categories }: RouteLinksProps) => {
  const { "*": currentSlug } = useParams()
  console.log(currentSlug, "currentSlug")
  return (
    <div className={styles.root}>
      {categories.map((category: CategoryType) => (
        <Link
          key={"key" + category.id}
          to={`./${currentSlug}/${category.slug}`}
        >
          {category.slug}
        </Link>
      ))}
    </div>
  )
}

export default RouteLinks
