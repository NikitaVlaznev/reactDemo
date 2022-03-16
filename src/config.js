// Node
import config from 'react-global-configuration';

/*
 * Настройки приложения "ReactJS - Демо-приложение"
 */

// Экспорт типа исходного axios без настроек
export const AxiosOriginalType = 'original';
// Экспорт типа экземпляра axios(настроенного)
export const AxiosInstanceType = 'instance';

// Глобальные настройки (общие для всех режимов)
config.set({
    // Настройки API сервера
    api: {
        baseURL: `localhost/`,       
        companies: {
            url: '/mock/companies/companies.json', type: AxiosOriginalType, // mock
            //url: 'companies', type: AxiosInstanceType, // real data
        },        
    }
}, { freeze: false })