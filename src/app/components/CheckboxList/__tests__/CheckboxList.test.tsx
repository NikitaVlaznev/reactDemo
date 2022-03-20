import React from 'react'
// Node
import { shallow } from 'enzyme'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListSubheader from '@mui/material/ListSubheader'
// Own
import CheckboxList from '../index'

describe('CheckboxList', () => {
    const props = {
        label:  "",
        items: [],
    }
    
    describe('CheckboxList - инициализация', () => {
        const checkboxList = shallow(<CheckboxList {...props} />)

        it('Корректная отрисовка', () => {
            expect(checkboxList).toMatchSnapshot()
        })
        
        it("Отрисовался 1 список чекбоксов(пустой)", () => {            
            expect(checkboxList.find(List)).toHaveLength(1)         
        })
        
        it("Отсутствует заголовок списка чекбоксов", () => {            
            expect(checkboxList.find(ListSubheader)).toHaveLength(0)         
        })
        
        it("Отсутствуют элементы списка чекбоксов", () => {            
            expect(checkboxList.find('li')).toHaveLength(0)
        })        
    })
    
    describe('CheckboxList - рендер', () => {
        const nextProps = {
            ...props,
            label:  "Специальности",
            items: [
                { id: 1, title: 'земляные работы' },
                { id: 2, title: 'жилищное строительство' },
                { id: 3, title: 'электрика' },
                { id: 4, title: 'монтажные работы' },
                { id: 5, title: 'сантехника' }
            ],
        }
        
        const checkboxList = shallow(<CheckboxList {...nextProps} />)

        it('Корректная отрисовка', () => {
            expect(checkboxList).toMatchSnapshot()
        }) 
        
        it("Отрисовался 1 список чекбоксов(с содержимым)", () => {            
            expect(checkboxList.find(List)).toHaveLength(1)         
        })
        
        it("Отрисовался 1 заголовок списка чекбоксов", () => {            
            expect(checkboxList.find(ListSubheader)).toHaveLength(1)         
        })
        
        it("Отрисовалось 5 элементов списка чекбоксов", () => {            
            expect(checkboxList.find(ListItem)).toHaveLength(5)         
        })       
    })   
})