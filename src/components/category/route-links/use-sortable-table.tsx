import { useEffect, useState } from "react"
import type { CategoriesType, CategoryType } from "../../../types"

const useSortableTable = (childrens: CategoriesType) => {
  const [data, setData] = useState<CategoriesType>(childrens)
  const [sortField, setSortField] = useState<keyof CategoryType>("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  useEffect(() => {
    handleSorting(sortField, sortOrder)
  }, [childrens])

  const handleSorting = (field: keyof CategoryType, order: "asc" | "desc") => {
    setSortField(field)
    setSortOrder(order)
    if (field && data.length > 0) {
      const sorted = [...childrens].sort((a: CategoryType, b: CategoryType) => {
        const aValue = a[field]
        const bValue = b[field]

        if (aValue === null) return 1
        if (bValue === null) return -1
        if (aValue === null && bValue === null) return 0

        if (typeof aValue === "string" && typeof bValue === "string") {
          return order === "desc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        }
        return order === "desc"
          ? ((aValue as number) || 0) - ((bValue as number) || 0)
          : ((bValue as number) || 0) - ((aValue as number) || 0)
      })
      setData(sorted)
      return
    }
    setData(data)
  }

  return [data, handleSorting, sortField, sortOrder]
}

export default useSortableTable
