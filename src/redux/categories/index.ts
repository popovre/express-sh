import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { getCategories } from "./thunks/get-categories"

// const categoriesAdapter = createEntityAdapter()

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    entities: { categories: [] },
    path: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.entities = payload
      state.loading = "fulfilled"
    })
    builder.addCase(getCategories.pending, state => {
      state.loading = "pending"
    })
    builder.addCase(getCategories.rejected, state => {
      state.loading = "rejected"
    })
  },
  selectors: {
    getLoadingState: state => state.loading,
    getCategoriesEntity: state => state.entities.categories,
    getEntityByPath: (state, action: PayloadAction<string>) => {
      console.log(action.payload, "action")

      const keys = action.payload.split("/").filter(key => {
        return key !== "" && key !== "categories"
      })

      if (keys.length) {
        console.log(keys, "keys")
        const categories = state.entities.categories
        console.log(categories, "categories in getEntityByPath")

        const category = keys.reduce((acc, key, index, arr) => {
          console.log(acc, "acc", index, "index")
          const current = acc.find((v, i) => v.slug === key)
          if (current && index === arr.length - 1) {
            console.log(current, "current")
            return current
          } else if (current && index !== arr.length - 1) {
            return current.children
          }
          // if(index < arr.length - 1) {

          // }
        }, categories)
        return category

        console.log(category, "category found")
      }
    },
  },
})

export const { getLoadingState, getCategoriesEntity, getEntityByPath } =
  categoriesSlice.selectors
