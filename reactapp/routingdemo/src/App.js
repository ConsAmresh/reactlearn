import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AboutUs from './AboutUs';
import SiteMenu from './sitemenu';
import Footer from './footer';
import ContactUs from './ContactUs';
import WikiAPI from './WikiAPI';
import API from './API';


function App() {
  return (
    <>
    <center><h2>Welcome to Page Routing Demo in React</h2></center>
    <hr/>
            <SiteMenu/>
    <hr/>
            <Routes>
                 {/* passing query stirng + use params */}
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/aboutus' element={<AboutUs/>} />
                  <Route path='/contactus' element={<ContactUs/>} />
                  <Route  path='/wikiapi' element={<WikiAPI/>} />
                  <Route exact path='/wikiapi/API' element={<API/>} />
            </Routes>
        <hr/>
            <Footer/>
    </>
  );
}

export default App;
