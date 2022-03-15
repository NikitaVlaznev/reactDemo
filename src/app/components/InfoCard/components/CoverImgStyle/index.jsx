//Node
import { styled } from '@mui/material/styles';

/*
 * Стилизованный компонент "Обложка"
 */

const CoverImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
});

// Экспорт компонента
export default CoverImgStyle;