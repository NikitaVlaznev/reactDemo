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
import { getCompanies } from '../../../redux/reducers/companies-reducer';

/*
 * Страница "Компании"
 */

// Компонент страницы
const CompaniesPage = (props) => {
    // Преобразование пропсов в локальные константы
    const { companies, loadingCompaniesComplete, getCompanies } = props;    
    
    // Хук эффекта
    useEffect(() => {        
        // Получить список компаний
        getCompanies();        
    }, [getCompanies])
    
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
        loadingCompaniesComplete: state.loadStore.loadingComplete?.companies,
    }
)

// Экспорт страницы
export default connect(mapStateToProps, { getCompanies })(CompaniesPage);