import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
