import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from "./redux/userSlice";


export const store = configureStore({
  reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDM) => gDM().concat( apiSlice.middleware),
})
