import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/" element={ <Home/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
