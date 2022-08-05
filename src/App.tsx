import {Route, BrowserRouter, Routes} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/home';
import Info from './pages/info';
import './App.css';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />  
        </Routes>
        </div>
      </div>

    </BrowserRouter>
    
  )
}

export default App
