import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(`
    TIME: ${new Date().toLocaleString()}
    ACTION TYPE: ${action.type}
    STATE: ${JSON.stringify(store.getState())}
    -----------------
  `)
  next(action)
}

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), loggerMiddleware]
  }
})

export default store