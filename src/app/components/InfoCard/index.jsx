import React from 'react';
// Node
import { Link as RouterLink } from 'react-router-dom';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// Own
import { CardMediaStyle, CoverImgStyle, TitleStyle } from './components';
import defaultLogo from "./src/img/default_logo.jpg";

/*
 * Компонент "Информационная карточка"
 */

export const InfoCard = (props) => {
    // Преобразование пропсов в локальные константы
    const { name, logo, speciality, city } = props.data;    

    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Card 
                sx={{ 
                    position: 'relative', 
                    borderRadius: '16px',
                    "&:hover": {                        
                        cursor: 'pointer',
                    },
                }}                
            >                
                <CardMediaStyle >                                       
                    <CoverImgStyle alt={name} src={logo || defaultLogo} />                    
                </CardMediaStyle>                            
                <CardContent sx={{pt: 4}}>
                    <Typography
                        gutterBottom
                        variant="caption"
                        sx={{ color: 'text.disabled', display: 'block' }}
                    >
                        <LocationOnIcon color={'error'} fontSize={'small'} />{city}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="caption"
                        sx={{ color: 'text.pink', display: 'block' }}
                    >
                        #{speciality}
                    </Typography>                    

                    <TitleStyle
                        to="#"
                        color="inherit"
                        variant="h6"
                        underline="hover"
                        component={RouterLink}
                        sx={{
                            "&:hover": {
                                color: 'inherit',
                                textDecoration: 'none',                                
                            },                 
                        }}                        
                    >
                        {name}
                    </TitleStyle>
                </CardContent>
            </Card>
        </Grid>        
    );
}

// Свойства по умолчанию
InfoCard.defaultProps = { }

// Экспорт компонента
export default InfoCard;