import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCategories = createAsyncThunk(
  "/catalog/getCategories",
  async () => {
    const response = await fetch(`https://express-shina.ru/vacancy/catalog`)
    const res = await response.json()
    return res
  },
)
