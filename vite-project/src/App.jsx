
import './App.css'
import Footer from './Layout/Footer'
import Mainlayout from './Layout/Mainlayout'
import Navbar from './Layout/Navbar'
import AddPage from './Pages/AddPage'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Pages from './Pages/Pages'
import Shop from './Pages/Shop'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pages" element={<Pages />} />
          <Route path="shop" element={<Shop />} />
          <Route path="footer" element={<Footer />} />
          <Route path="mainlayuot" element={<Mainlayout />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="addpage" element={<AddPage />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
