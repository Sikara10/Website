import React from "react";
import Header from "./Header";
import {Routes , Route} from 'react-router-dom'
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";


const App = ()=>{
    return(<>
    <Header />
    <Routes>
        <Route path="/home" element={<Home />}  />      
        <Route path="/services" element={<Services/>}  />
        <Route path="/about" element={<About/>}  />      
        <Route path="/contact" element={<Contact />}  />      
    </Routes>
    
    </>)
}
export default App;