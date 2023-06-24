import Home from './redux/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Edit from './redux/Edit';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
