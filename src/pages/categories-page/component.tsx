import styles from "./style.module.scss"

import type { AppDispatch, RootState } from "../../redux"
import { useDispatch, useSelector } from "react-redux"
import { getLoadingState } from "../../redux/categories"
import { useEffect } from "react"
import { getCategories } from "../../redux/categories/thunks/get-categories"

import Loader from "../../components/loader/component"
import { Outlet } from "react-router-dom"
import Breadcrumbs from "../../components/breadscrumbs/component"
import CategoriesNav from "../../components/categories-nav/component"

const CategoriesPage = () => {
  const dispatch = useDispatch<AppDispatch>()

  const loadingState = useSelector((state: RootState) => getLoadingState(state))

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Categories page</h1>
      <Breadcrumbs />
      <div>
        {loadingState === "pending" ? (
          <Loader classNames={["centered"]} />
        ) : (
          <div className={styles.content}>
            <CategoriesNav />
            <Outlet />
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoriesPage
