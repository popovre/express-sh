import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { getCategories } from "./thunks/get-categories"
import type { CategoriesType, CategoryType } from "../../types"

// const categoriesAdapter = createEntityAdapter()

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    entities: { categories: [] },
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
      const keys = action.payload.split("/").filter(key => {
        return key !== "" && key !== "categories"
      })

      if (keys.length) {
        const categories = state.entities.categories

        const category = keys.reduce<CategoryType | CategoriesType | undefined>(
          (acc, key) => {
            if (Array.isArray(acc)) {
              const current = acc.find((v: CategoryType) => v.slug === key)
              if (current && key !== keys[keys.length - 1]) {
                return current.children ?? []
              }
              return current
            }
            return undefined
          },
          categories,
        )

        console.log(category, "category found")
        return category
      }
    },
  },
})

export const { getLoadingState, getCategoriesEntity, getEntityByPath } =
  categoriesSlice.selectors
