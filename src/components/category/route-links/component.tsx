import { Link, useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import type { CategoriesType, CategoryType } from "../../../types"
import useSortableTable from "./use-sortable-table"
import { useState } from "react"

export interface RouteLinksProps {
  categories: CategoriesType
}

const RouteLinks = ({ categories }: RouteLinksProps) => {
  const [sort, setSort] = useState<"asc" | "desc">("asc")
  const { "*": currentSlug } = useParams()
  const [data, handleSorting, sortField, sortOrder] =
    useSortableTable(categories)

  const toggleSort = () => {
    const order = sortOrder === "asc" ? "desc" : "asc"
    ;(handleSorting as Function)(sortField, order)
    setSort(order)
  }
  return (
    <div className={styles.root}>
      <button onClick={toggleSort}>
        Сортировка: {sort === "asc" ? "по возрастанию" : "по убыванию"}
      </button>
      <div className={styles.content}>
        {data.map((category: CategoryType) => (
          <Link
            key={"key" + category.id}
            to={`./${currentSlug}/${category.slug}`}
          >
            {category.slug}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RouteLinks
