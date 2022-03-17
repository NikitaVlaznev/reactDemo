import React from 'react'
// Node
import './config'
import { shallow } from 'enzyme'
// Own
import { App } from './App'

it("Рендеринг приложения выполнен без ошибок", () => {
    shallow(<App />); 
});
