import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router"
import { Navbar } from "./components/shared/Navbar"
import { Footer } from './components/shared/Footer';




function App() {
  return(
  <div className="min-h-screen flex flex-col">
      <Navbar/>
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="flex-grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
