import Footer from "./components/Footer/Footer"
import Landing from "./components/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
function App() {


  return (
    <>
    <Navbar/>
    <div className="container">
      <Landing/>
      <Footer/>
    </div>
    </>
  )
}

export default App
