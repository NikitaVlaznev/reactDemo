import React, { useEffect } from "react";
//Node
import _ from 'lodash-contrib'
import { connect } from 'react-redux'
import { Box, CircularProgress, Grid, InputAdornment, TextField, Typography } from '@mui/material'
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
    
    // Событие с дебаунсом
    const debouncedEvent = _.debounce((query) => {
        // Установить строку запроса в фильтре компаний    
        setQueryFilter(query)
    }, 750)
    
    // Событие изменения поискового поля ввода
    const handleChange = (event) => {
        // Вызов события с дебаунсом    
        debouncedEvent(event.target.value)     
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
                        {companies.length
                            ? companies.map((data, index) => 
                                <InfoCard data={data} key={`companiesInfoCard_${index}`} />
                            )
                            : <Grid item xs={12}>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    sx={{ color: 'text.disabled', display: 'block' }}
                                >
                                    По Вашему запросу ничего не найдено...
                                </Typography>
                            </Grid>
                        }
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