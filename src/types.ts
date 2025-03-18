export interface FetchedData {
  categories: CategoriesType
}

export interface CategoryType {
  id: number
  slug: string
  name: string
  index: boolean
  children?: CategoriesType
}

export type CategoriesType = CategoryType[]
