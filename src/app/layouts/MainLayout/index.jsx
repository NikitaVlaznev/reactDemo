import React from "react"
// Node
import { Grid } from '@mui/material'
// Blocks
import LeftBlock from '../../blocks/LeftBlock'
import ContentBlock from '../../blocks/ContentBlock'

/*
 * Шаблон "Главный"
 */

// Компонент шаблона
const MainLayout = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} lg={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ m: 2 }}>
                        <LeftBlock />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={10} sx={{ mt: {xs: 0, lg: 2}, pt: {xs: '16px !important', lg: '48px !important'} }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ m: 2, mt: {xs: 0, lg: 2}, pt: {xs: '16px !important', lg: '24px !important'} }}>
                        <ContentBlock />
                    </Grid>
                </Grid>                        
            </Grid>
        </Grid>
    )
}

// Экспорт шаблона
export default MainLayout