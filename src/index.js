/* eslint-disable react/jsx-closing-tag-location */

import React from 'react'
import ReactDOM from 'react-dom/client'
// import HelloJs from './HelloJS'

import App from './App'// import CounterReact from './CounterReact'
import './index.css'

import reportWebVitals from './reportWebVitals'

const firstElement = (
  <div>
    <App/>
  </div>
)

// const secondElement = (
//   <div>
//     <counterJS1/>
//   </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  firstElement
  // secondElement
  // <React.StrictMode>

  // </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
