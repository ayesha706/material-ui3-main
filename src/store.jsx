import { configureStore } from '@reduxjs/toolkit'

import {  userSlice } from "./redux/userSlice";


export const store = configureStore({
  reducer: {
      [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: (gDM) => gDM().concat( userSlice.middleware),
})
