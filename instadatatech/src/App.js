import Headernav from './Components/Headernav'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import './App.css';
import Blog from './Components/blog/Blog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js.map'
import Services from "./Components/Services.jsx"
import About from './Components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Testimonials from './Components/Testimonials'
import Swiper_footer from './Components/Swiper_footer'

function App() {
  return (
    <>
    <Headernav/>
    <Navbar/>
    <Home/>
    <Blog/>
    <Contact/>
    <Services/>
      <Footer/>
 
         
     </>
  );
}

export default App;
