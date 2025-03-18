import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { categoriesSlice } from "./categories"

export const store = configureStore({
  reducer: combineSlices(categoriesSlice),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
