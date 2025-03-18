// import { getCategories } from "../../redux/categories/thunks/get-categories"
import { useDispatch, useSelector } from "react-redux"
import { getLoadingState, getEntities } from "../../redux/categories"
import { useEffect } from "react"
import { getCategories } from "../../redux/categories/thunks/get-categories"

const Panel = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => getEntities(state))
  const loadingState = useSelector(state => getLoadingState(state))
  console.log(categories, "categories")

  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <div>
      Panel
      <p>content</p>
      <div>
        {loadingState === "pending" ? <div>download</div> : <div>data</div>}
      </div>
    </div>
  )
}

export default Panel
