import React from 'react'
// Node
import { Route } from "react-router-dom"
// Pages
import CompaniesPage from '../pages/CompaniesPage'

/*
 * Блок "Контент"
 */

// Компонент блока
const ContentBlock = () => {
    return (  
        <Route path="/" exact render={() => <CompaniesPage />} />       
    )
}

// Экспорт блока
export default ContentBlock