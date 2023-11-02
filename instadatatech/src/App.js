import Headernav from './components/Headernav'
import Navbar from './components/Navbar'
import Home from '.components/Home'
import Footer from './components/Footer'
import './App.css';
import Blog from './components/blog/Blog';

function App() {
  return (
    <>
      <Blog />
      <Headernav />
      <Navbar />
      <Home />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
