// Node
import { createSlice } from '@reduxjs/toolkit'

// Начальное состояние
const initialState = {
    loadingComplete: {
        app: false, companies: false,
    }
}

// Слайс загрузки
const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {
        // Установить состояние загрузки в "Загружено"
        setLoaded(state, action) {            
            state.loadingComplete[action.payload] = true      
        },
        // Установить состояние загрузки в "Загружается"
        setLoading(state, action) {        
            state.loadingComplete[action.payload] = false       
        },
    }
});

// Экспорт создателей действий
export const { setLoaded, setLoading } = loadSlice.actions
// Экспорт редьюсера
export default loadSlice.reducer