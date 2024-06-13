
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'

function App() {
  return (
   <>
   <div className='app'>
    <Navbar></Navbar>
    <Routes>
      < Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
    </Routes>
   </div>
   <Footer></Footer>
   </>
  )
}

export default App
