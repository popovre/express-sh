import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getCategories } from "./thunks/get-categories"

const categoriesAdapter = createEntityAdapter()

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesAdapter.getInitialState({
    entities: {},
    loading: "idle",
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      // categoriesAdapter.setAll(state, payload.data)
      state.entities = payload
      console.log(payload, "payload")
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
    getEntities: state => state.entities,
  },
})

export const { getLoadingState, getEntities } = categoriesSlice.selectors
