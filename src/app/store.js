import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/counter/homeSlice'
import UserReducer from '../features/counter/UserSlice'

export const store = configureStore({
  reducer: {
    homeState: homeReducer,
    userReducer:UserReducer
  },
})