import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css'
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import ContactUs from './pages/ContactUs/ContactUs';
import Destination from './pages/Destination/Destination';
import Events from './pages/Events/Events';
import OurStory from './pages/OurStory/OurStory';
import Press from './pages/Press/Press';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/menu' element={<Menu />}/>
                    <Route path='/contact-us' element={<ContactUs />}/>
                    <Route path='/destination' element={<Destination />}/>
                    <Route path='/events' element={<Events />}/>
                    <Route path='/our-story' element={<OurStory />}/>
                    <Route path='/press' element={<Press />}/>
                </Routes>
            </BrowserRouter>
  </React.StrictMode>
);
