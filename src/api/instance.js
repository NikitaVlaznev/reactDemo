// Node
import config from 'react-global-configuration';
import axios from 'axios';

//=== НАСТРОЙКА ЭКЗЕМПЛЯРА AXIOS ===

// Создание экземпляра axios с необходимыми настройками
const instance = axios.create({
    baseURL: config.get('api.baseURL'),    
    withCredentials: true,
    headers: {}
});

// Объект-обертка для экземпляра axios
const axiosWrapper = {
    // Исходный axios без настроек
    original: axios,
    // Экземпляр axios(настроенный)
    instance,
    // Получить значение заголовка Authorization
    getAuthHeader(access_token){
        return `Bearer ${access_token}`;
    },
    // Задать значение заголовка Authorization
    setAuthHeader(access_token){
        this.instance.defaults.headers.Authorization = this.getAuthHeader(access_token); 
    }
}

// Экспорт объекта-обертки для экземпляра axios
export default axiosWrapper;