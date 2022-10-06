import React from "react";
import Header from "./Header";
import {Routes , Route , Navigate} from 'react-router-dom'
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";


const App = ()=>{
    return(<>
    <Header />
    <Routes>
        <Route path="sikara10.github.io/home" element={<Home />}  />      
        <Route path="sikara10.github.io/services" element={<Services/>}  />
        <Route path="sikara10.github.io/about" element={<About/>}  />      
        <Route path="sikara10.github.io/contact" element={<Contact />}  />      
        <Route path="sikara10.github.io/Website/" element={<Navigate to="/home" />} />
    </Routes>
    
    </>)
}
export default App;