import React from "react"
//Node
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Checkbox from '@mui/material/Checkbox'

/*
 * Компонент "Список чекбоксов" (обертка над MaterialUI)
 */

// Экспорт компонента
export const CheckboxList = ({ label, items, onCheckboxClick }) => {
    // Установка маркера состояния чекбокса
    const [checked, setChecked] = React.useState([]);

    // Метод обработки изменения состояния чекбокса
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        onCheckboxClick && onCheckboxClick(newChecked)
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}
              subheader={ <ListSubheader>{label}</ListSubheader> }
        >
            {
                items.map((data) => {
                    const labelId = `checkbox-list-label-${data?.id}`
                    
                    return (
                        <ListItem
                            key={data?.id}           
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(data?.id)} dense>
                                <ListItemIcon sx={{ minWidth: { xs: 'unset', sm: '42px' } }} >
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(data?.id) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={data?.title} />
                            </ListItemButton>
                        </ListItem>
                    );
                })
            }
        </List>
    )
}

// Свойства по умолчанию
CheckboxList.defaultProps = { }

// Экспорт компонента
export default CheckboxList