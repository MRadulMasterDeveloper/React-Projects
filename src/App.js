import './App.css';
import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Main from './pages/Main';



function App() {
  return (
    <BrowserRouter>
  <Routes >
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/main" element={<Main />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
