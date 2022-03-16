// Node
import { configureStore } from '@reduxjs/toolkit'
// Reducers
import rootReducer from './reducers/'

// Хранилище
const store = configureStore({
    reducer: rootReducer,
})
       
// Экспорт хранилища
export default store