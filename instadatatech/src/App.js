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
import Prop_item from './Components/Prop_item'
function App() {
  return (
    <BrowserRouter>
      <Headernav/>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/products' element={<><Prop_item data={"Products"}/><Products/></>} /> 
        <Route path='/services' element={<><Prop_item data={"Services"}/><Services/></>} />
        <Route path='/about' element={<><Prop_item data={"About"}/><About/></>} />
        <Route path='/blog' element={<><Prop_item data={"Blog"}/><Blog/></>}/>
        <Route path='/contact' element={<><Prop_item data={"Contact US"}/><Contact /></>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
