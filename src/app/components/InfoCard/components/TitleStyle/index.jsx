//Node
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

/*
 * Стилизованный компонент "Заголовок"
 */

const TitleStyle = styled(Link)({
    height: 66,
    overflow: 'hidden',
    WebkitLineClamp: 3,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical'
});

// Экспорт компонента
export default TitleStyle;