import React from 'react'
// Node
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles'
// Config
import './config'
// Redux
import store from './redux/store'
// Theme
import theme from './theme'
// Own
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={createTheme(theme)}>
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()