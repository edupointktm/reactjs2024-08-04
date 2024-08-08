import React from 'react'
import Home from '../component/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../component/About'
import Contact from '../component/Contact'
import Page_not_found from '../component/Page_not_found'
import Event_handling from '../component/Event_handling'
import Hooke from '../component/Hooke'
import Student_details from '../component/Student_details'
import GetAPIData from '../component/GetAPIData'
import ProductDetails from '../component/ProductDetails'
import Login from '../component/Login'
import Userdetails from '../component/Userdetails'

function Section() {
    return (
        <>

           
            
                <Routes>
                    <Route path="/" element={ <Home/>}/>
                    <Route path="/about" element={ <About/>}/>
                    <Route path="/contact" element={ <Contact/>}/>
                    <Route path="/eventhandling" element={ <Event_handling/>}/>
                    <Route path="/hook" element={ <Hooke/>}/>
                    
                    <Route path="/student_details/:sid" element={ <Student_details/>}/>
                    <Route path="/productdetails/:pid" element={ <ProductDetails/>}/>
                    
                    <Route path="/apidata" element={ <GetAPIData/>}/>

                    <Route path="/login" element={ <Login/>}/>
                    <Route path="/userdetails" element={ <Userdetails/>}/>
                    <Route path="*" element={ <Page_not_found/>}/>
                </Routes>


           
        </>
    )
}

export default Section