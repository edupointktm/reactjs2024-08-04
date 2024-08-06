import React from 'react'
import Home from '../component/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../component/About'
import Contact from '../component/Contact'
import Page_not_found from '../component/Page_not_found'

function Section() {
    return (
        <>

           
            
                <Routes>
                    <Route path="/" element={ <Home/>}/>
                    <Route path="/about" element={ <About/>}/>
                    <Route path="/contact" element={ <Contact/>}/>
                    <Route path="*" element={ <Page_not_found/>}/>
                </Routes>


           
        </>
    )
}

export default Section