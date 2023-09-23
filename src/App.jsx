import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BeerItem from './components/BeerItem/BeerItem'
import BeerList from './components/BeerList/BeerList'
import BeerDetail from './components/BeerDetail/BeerDetail'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail/:id' element={<BeerDetail/>} />
          <Route path='/all' element={<BeerList/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
