import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../Reducer/LoginAction'
export const Store = configureStore({
  reducer: {
    Login:LoginReducer,
  },
})