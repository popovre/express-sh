import { Link } from "react-router-dom"
import type { CategoriesType } from "../../../../types"
import styles from "./styles.module.scss"

export interface RouteLinksProps {
  categories: CategoriesType
}

const RouteLinks = ({ categories }: RouteLinksProps) => {
  return (
    <div className={styles.root}>
      {categories.map(category => (
        <Link key={"key" + category.id} to={`./${category.slug}`}>
          {category.slug}
        </Link>
      ))}
    </div>
  )
}

export default RouteLinks
