// import { useState } from "react"
// import type { CategoriesType } from "../../types"
// import styles from "./style.module.scss"
// import CategoryMemoized from "./category/component"

// interface PanelProps {
//   data: CategoriesType
// }

// const Categories = ({ data }: PanelProps) => {
//   const [categories, setCategories] = useState<CategoriesType>(data)

//   return (
//     <div className={styles.root}>
//       <div className={styles.categories}>
//         {categories.map(category => (
//           <CategoryMemoized category={category} key={"key" + category.id} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Categories
