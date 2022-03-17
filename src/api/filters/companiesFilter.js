// Экспорт фильтра компаний
export const companiesFilter = {
    // Фильтр списка компаний
    сompaniesList(companies, query, categories) {        
        // Отфильтрованный массив компаний - копия исходного массива
        let filteredCompanies = [...companies]        
        // Проход по исходному массиву компаний
        companies.forEach((company, index) => {            
            if(// Если название компании не соответствует поисковой строке
               !company.name.toLowerCase().includes(query) ||
               // или массив категорий не пуст и он не содержит айди категории компании
               (categories.length && !categories.includes(company.specialityId))
            ) {
                // Удаление несоответствующего критериям элемента массива
                delete(filteredCompanies[index])
            }
        })
        // Удаление "пустых" элементов массива
        filteredCompanies = filteredCompanies.filter(n => n)        
        
        // Возврат отфильтрованного массива
        return filteredCompanies
    },
}