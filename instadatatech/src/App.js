import Headernav from './components/Headernav'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css';
import Services from './components/Services';
import Blog from './components/blog/Blog';
import Blogpage1 from './components/blog/Blogpage1'
import Blogpage2 from './components/blog/Blogpage2'
import Blogpage3 from './components/blog/Blogpage3'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Testimonials from './components/Testimonials'
import Swiper_footer from './components/Swiper_footer'

function App() {
  return (

    <BrowserRouter>
      <Headernav />
      <Navbar />
      <Services />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogpage1" element={<Blogpage1 />} />
        <Route path="/blogpage2" element={<Blogpage2 />} />
        <Route path="/blogpage3" element={<Blogpage3 />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/products' element={<Products/>} /> */}
        <Route path='/blog' element={<><Blog /></>} />
        <Route path='/services' element={<Services />} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Testimonials />
      <Swiper_footer />

      <Footer />


    </BrowserRouter>
  );
}

export default App;
