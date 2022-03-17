// Node
import config from 'react-global-configuration'
// API
import axios from '../instance'
// Filters
import { companiesFilter } from '../filters/companiesFilter'

// Экспорт API компаний
export const companiesAPI = {   
    getCompanies(query = '', categories = []) {        
        return axios[config.get('api.companies.type')]
            .get(config.get('api.companies.url'))
            .then((response) => {                
                // Возврат ответа API, пропущенный через фильтр списка компаний
                return companiesFilter.сompaniesList(
                    response?.data?.content, 
                    query, 
                    categories
                )
            })
            .catch(() => { return null })
    },    
}