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
            <Grid item xs={12} md={4}>
                <LeftBlock />
            </Grid>
            <Grid item xs={12} md={8}>
                <ContentBlock />
            </Grid>
        </Grid>
    )
}

// Экспорт шаблона
export default MainLayout