import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Info'
import About from './About';
import Interests from './Interests';
import Social from './Social';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Info />
    <About />
    <Interests />
    <Social />
  </div>
)