import { Link, useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import { CategoriesType } from "../../../types"

export interface RouteLinksProps {
  categories: CategoriesType
}

const RouteLinks = ({ categories }: RouteLinksProps) => {
  const { "*": currentSlug } = useParams()
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
