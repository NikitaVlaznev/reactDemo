import React from "react"
// Components
import CheckboxList from "../../components/CheckboxList"
// Own
import { useCheckboxListData } from './data/data'

/*
 * Блок "Левый"
 */

// Компонент блока
const LeftBlock = () => {
    // Получение данных для списка чекбоксов
    const data = useCheckboxListData();
    
    return (
        <CheckboxList
            label={data.label}
            items={data.items}
        />
    )
}

// Экспорт блока
export default LeftBlock