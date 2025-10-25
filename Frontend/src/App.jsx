import Navbar from './Components/Header/Navbar'
import SubNavbar from './Components/Header/SubNavbar' // 1. Import the new component
import Home from '../Pages/Home.jsx' // Make sure Home is imported if it's not already
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <SubNavbar /> {/* 2. Add it right after the Navbar */}
      <Home /> {/* 3. Your home page content will render below it */}
      <Footer />
    </>
  )
}

export default App