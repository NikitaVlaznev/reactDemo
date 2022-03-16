// Node
import config from 'react-global-configuration';
// API
import axios from '../instance';

// Экспорт API компаний
export const companiesAPI = {   
    getCompanies() {        
        return axios[config.get('api.companies.type')]
            .get(config.get('api.companies.url'))
            .then((response) => {                                                                    
                // Возврат ответа API
                return response?.data?.content
            })
            .catch(() => { return null })
    },    
}