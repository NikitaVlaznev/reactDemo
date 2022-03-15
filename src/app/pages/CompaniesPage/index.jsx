import React from "react"
//Node
import { Grid } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
// Components
import InfoCard from "../../components/InfoCard"
// Data
import { CompaniesData } from "./data/companies"

/*
 * Страница "Компании"
 */

// Компонент страницы
const CompaniesPage = () => {    
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
            <Grid container spacing={3}>
                {CompaniesData.content.map((data, index) => 
                    <InfoCard data={data} />
                )}
            </Grid>
        </>
    )    
}

// Экспорт страницы
export default CompaniesPage