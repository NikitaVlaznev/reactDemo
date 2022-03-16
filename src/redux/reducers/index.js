// Редьюсеры
import loadReducer from './load-reducer'
import companiesReducer from './companies-reducer'

// Корневой редьюсер
const rootReducer =  {    
    loadStore: loadReducer,    
    companiesStore: companiesReducer,    
}

// Экспорт корневого редьюсера
export default rootReducer