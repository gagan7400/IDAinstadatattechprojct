import Headernav from './Components/Headernav'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import './App.css';
import Blog from './Components/blog/Blog';
import Services from './Components/Services';
import About from './Components/About';
import Products from './Components/Products';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Testimonials from './Components/Testimonials'
import Swiper_footer from './Components/Swiper_footer'

function App() {
  return (
    <BrowserRouter>
      <Headernav/>
      <Navbar/>
      <Routes>

        <Route path='/'element={<Home />} />
        <Route path='/products' element={<Products/>} /> 
        <Route path='/blog' element={<><Blog /><Services /></>} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Testimonials/>
      <Swiper_footer/>

      <Footer />


    </BrowserRouter>
  );
}

export default App;
