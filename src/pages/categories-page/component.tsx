import PanelContainer from "../../components/categories/container"
import styles from "./style.module.scss"

const CategoriesPage = () => {
  return (
    <div className={styles.root}>
      <p>Categories page</p>
      <PanelContainer />
    </div>
  )
}

export default CategoriesPage
