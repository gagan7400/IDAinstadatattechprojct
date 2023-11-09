import React, { useState, useEffect } from 'react'
import Headernav from './Components/Headernav'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import './App.css';
import Blog from './Components/blog/Blog';
import Services from './Components/Services';
import Products from './Components/Products'
import About from './Components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prop_item from './Components/Prop_item'
import { MutatingDots } from 'react-loader-spinner'
function App() {
  const [load, setLoad] = useState(false);

  const loader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f0f0',

  };

  useEffect(() => {
    const delay = 2000;
    const timeoutId = setTimeout(() => {
      setLoad(true);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BrowserRouter> 
     {load ? <div className='Broter'>
        <Headernav />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<><Prop_item data={"Products"} /><Products /></>} />
          <Route path='/services' element={<><Prop_item data={"Services"} /><Services /></>} />
          <Route path='/about' element={<><Prop_item data={"About"} /><About /></>} />
          <Route path='/blog' element={<><Prop_item data={"Blog"} /><Blog /></>} />
          <Route path='/contact' element={<><Prop_item data={"Contact US"} /><Contact /></>} />
        </Routes>

        <Footer />
      </div> :(<div style={loader}>
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor='#4fa94d'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>)}
    </BrowserRouter>
  );
}

export default App;
