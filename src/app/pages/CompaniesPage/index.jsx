import React, { useEffect } from "react";
//Node
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
// Components
import InfoCard from "../../components/InfoCard"
// Redux
import { getCompanies, setQueryFilter } from '../../../redux/reducers/companies-reducer';

/*
 * Страница "Компании"
 */

// Компонент страницы
const CompaniesPage = (props) => {
    // Преобразование пропсов в локальные константы
    const { 
        companies, queryFilter, categoriesFilter, loadingCompaniesComplete, 
        getCompanies, setQueryFilter, 
    } = props
    
    // Хук эффекта
    useEffect(() => {
        // Получить список компаний
        getCompanies(queryFilter, categoriesFilter)
    }, [getCompanies, queryFilter, categoriesFilter])
    
    // Событие изменения поискового поля ввода
    const handleChange = (event) => {
        // Установить строку запроса в фильтре компаний    
        setQueryFilter(event.target.value)     
    }
    
    return (
        <>
            <TextField
                label="Поиск по названию компании"
                id="outlined-start-adornment"
                sx={{ mb: 2, width: '100%' }}
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>,
                }}
                onChange={handleChange}
            />
            { loadingCompaniesComplete
                ? <>
                    <Grid container spacing={3}>
                        {companies.map((data, index) => 
                            <InfoCard data={data} key={`companiesInfoCard_${index}`} />
                        )}
                    </Grid>
                </>
                : <Box
                    sx={{ color: 'red', mt: 2, mx: 'auto', width: 60 }}                                      
                >
                    <CircularProgress color="inherit" />
                </Box>
            }
        </>
    )    
}

// Маппинг стейта в пропсы страницы
const mapStateToProps = (state) => (    
    {
        companies: state.companiesStore?.companies,
        queryFilter: state.companiesStore.filter?.query,
        categoriesFilter: state.companiesStore.filter?.categories,
        loadingCompaniesComplete: state.loadStore.loadingComplete?.companies,
    }
)

// Экспорт страницы
export default connect(mapStateToProps, { getCompanies, setQueryFilter })(CompaniesPage);