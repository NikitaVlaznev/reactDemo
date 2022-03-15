import React from "react"
// Node
import { Grid } from '@mui/material'
// Blocks
import LeftBlock from '../blocks/LeftBlock'
import ContentBlock from '../blocks/ContentBlock'

/*
 * Шаблон "Главный"
 */

// Компонент шаблона
const MainLayout = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ m: 2 }}>
                        <LeftBlock />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={10}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ m: 2 }}>
                        <ContentBlock />
                    </Grid>
                </Grid>                        
            </Grid>
        </Grid>
    )
}

// Экспорт шаблона
export default MainLayout