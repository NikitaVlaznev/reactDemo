import React from 'react'
// Node
import { shallow } from 'enzyme'
import { Typography } from '@mui/material';
// Own
import InfoCard from '../index'
import { CoverImgStyle, TitleStyle } from '../components';

describe('InfoCard', () => {
    const props = {
        data: {}        
    }
    
    describe('InfoCard - инициализация', () => {
        const infoCard = shallow(<InfoCard {...props} />)

        it('Корректная отрисовка', () => {
            expect(infoCard).toMatchSnapshot()
        })

        it("Отрисовалась обложка с дефолтным лого", () => {            
            expect(infoCard.find(CoverImgStyle).prop('src')).toContain('default_logo')         
        })
        
        it("Отсутствует заголовок карточки", () => {            
            expect(infoCard.find(TitleStyle)).toEqual({})
        })
        
        it("Отсутствует город карточки", () => {            
            expect(infoCard.find(Typography).at(0)).toEqual({})
        })
        
        it("Отсутствует категория карточки", () => {            
            expect(infoCard.find(Typography).at(1)).toEqual({})
        })
    })

    describe('InfoCard - рендер', () => {
        const nextProps = {
            ...props,
            data: {
                "id": 1,
                "name": "Строй Холдинг",
                "logo": "https://picsum.photos/250/150?id=1",
                "speciality": "земляные работы",
                "specialityId": 1,
                "city": "Санкт-Петербург"            
            }
        }
        
        const infoCard = shallow(<InfoCard {...nextProps} />)

        it('Корректная отрисовка', () => {
            expect(infoCard).toMatchSnapshot()
        }) 
        
        it("Отрисовалась обложка с отличным от дефолтного лого", () => {            
            expect(infoCard.find(CoverImgStyle).prop('src')).not.toContain('default_logo')         
        })
        
        it("Отрисовался заголовок карточки", () => {            
            expect(infoCard.find(TitleStyle).text()).toEqual('Строй Холдинг')
        })
        
        it("Отрисовался город карточки", () => {            
            expect(infoCard.find(Typography).at(0).text()).toEqual('Санкт-Петербург')
        })
        
        it("Отрисовалась категория карточки", () => {            
            expect(infoCard.find(Typography).at(1).text()).toEqual('#земляные работы')
        })
    })    
})