// Node
import { createSlice } from '@reduxjs/toolkit'
// API
import { companiesAPI } from '../../api/endpoints/companiesAPI'
// Создатели действий загрузки
import { setLoading, setLoaded } from './load-reducer'

// Начальное состояние
const initialState = {
    // Массив компаний
    companies: [],
}

// Слайс компаний
const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        // Установить список компаний
        setCompanies(state, action) {                   
            state.companies = action.payload
        },          
    }
})

// Экспорт создателей действий
export const { setCompanies } = companiesSlice.actions;
// Экспорт редьюсера
export default companiesSlice.reducer;

//THUNK CREATORS

// Получение списка компаний
export const getCompanies = () => {    
    return (dispatch) => {
        // Установить состояние загрузки в "Загружается"
        dispatch(setLoading('companies'))
                        
        // Получение данных через API компаний
        companiesAPI.getCompanies().then((response) => {                        
            // Установить список компаний
            dispatch(setCompanies(response))                      
            // Установить состояние загрузки в "Загружено"
            dispatch(setLoaded('companies'))
        })
    }
}