
import './css/App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar /> 
    <Routes>/* Here */
      <Route path='/' element={<Home/>}></Route>
    </Routes> /* Here */

    </>
  )
}

export default App
