import {Route, BrowserRouter, Routes} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/home';
import EPN from './pages/epn';
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/epn" element={<EPN />} />  
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
