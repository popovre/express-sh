import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { REQUEST_STATUS, type RequestStatus } from "./constants"

export const requestSlice = createSlice({
  name: "request",
  initialState: {} as Record<string, RequestStatus>,
  selectors: {
    selectIsLoading: (state, id) => state[id] === REQUEST_STATUS.pending,
    selectIsFulfilled: (state, id) => state[id] === REQUEST_STATUS.success,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, action: PayloadAction<{ requestId: string }>) => {
          const { requestId } = action.payload
          state[requestId] = REQUEST_STATUS.pending
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, action: PayloadAction<{ requestId: string }>) => {
          const { requestId } = action.payload
          state[requestId] = REQUEST_STATUS.success
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, action: PayloadAction<{ requestId: string }>) => {
          const { requestId } = action.payload
          state[requestId] = REQUEST_STATUS.fail
        },
      ),
})

export const { selectIsLoading, selectIsFulfilled } = requestSlice.selectors
