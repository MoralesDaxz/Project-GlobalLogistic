import './App.css'
import { CopyRight } from './components/CopyRight';
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { People } from './pages/People';
import { Companies } from './pages/Companies';
import { Help } from './pages/Help';
import { UsPage } from './pages/UsPage';
function App() {


  return (
    <>
     <BrowserRouter>
     <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/people" element={<People></People>}/>
                <Route path="/companies" element={<Companies></Companies>}/>
                <Route path="/us" element={<UsPage></UsPage>}/>
                <Route path="/help" element={<Help></Help>}/>
            </Routes>
      <CopyRight></CopyRight>
        </BrowserRouter>

    </>
  )
}

export default App
