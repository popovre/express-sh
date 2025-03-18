import type { AppDispatch, RootState } from "../../redux"
import { useDispatch, useSelector } from "react-redux"
import { getLoadingState, getEntities } from "../../redux/categories"
import { useEffect } from "react"
import { getCategories } from "../../redux/categories/thunks/get-categories"
import Panel from "./component"
import Loader from "../loader/component"

const PanelContainer = () => {
  const dispatch = useDispatch<AppDispatch>()

  const categories = useSelector((state: RootState) => getEntities(state))
  const loadingState = useSelector((state: RootState) => getLoadingState(state))

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div>
      {loadingState === "pending" ? (
        <Loader classNames={["centered"]} />
      ) : (
        <Panel categories={categories} />
      )}
    </div>
  )
}

export default PanelContainer
