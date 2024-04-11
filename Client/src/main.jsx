import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Section1 from './Components/Section1.jsx'
import Section2 from './Components/Section2.jsx'
import Headroom from 'react-headroom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Headroom>
    <Navbar />
    </Headroom>
    <Hero />
    <Section1 />
    <Section2 />
  </React.StrictMode>,
)
