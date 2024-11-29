import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import Basketpage from './pages/basketpage';
import Contacts from './pages/home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Contacts />} />
            <Route path="/basketpage" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
