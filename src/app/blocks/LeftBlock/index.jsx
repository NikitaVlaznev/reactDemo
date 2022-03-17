import React from "react"
//Node
import { connect } from 'react-redux'
// Components
import CheckboxList from "../../components/CheckboxList"
// Redux
import { setCategoriesFilter } from '../../../redux/reducers/companies-reducer';
// Own
import { useCheckboxListData } from './data/data'

/*
 * Блок "Левый"
 */

// Компонент блока
const LeftBlock = ({ setCategoriesFilter }) => {
    // Получение данных для списка чекбоксов
    const data = useCheckboxListData()
    
    // Событие клика по чекбоксу из группы
    const handleCheckboxClick = (checked) => {        
        // Установить категории в фильтре компаний    
        setCategoriesFilter(checked)
    }
    
    return (
        <CheckboxList
            label={data.label}
            items={data.items}
            onCheckboxClick={handleCheckboxClick}
        />
    )
}

// Экспорт блока
export default connect(null, { setCategoriesFilter })(LeftBlock);