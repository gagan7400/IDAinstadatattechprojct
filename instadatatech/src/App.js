import Headernav from './Components/Headernav'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css';
import Blog from './Components/blog/Blog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js.map'
import Services from "./Components/Services.jsx"
import About from './Components/About'
import Products from './Components/Products.jsx'
import Letsstart from './Components/Letsstart.jsx'
function App() {
  return (
    <BrowserRouter>
      <Headernav/>
      <Navbar/>
      <Routes>

        <Route path='/'element={<Home />} />
        {/* <Route path='/products' element={<Products/>} /> */}
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
