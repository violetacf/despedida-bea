import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './../Header/Header.js';
import NavBar from '../NavBar/NavBar';
import Friday from '../Days/Friday';
import Saturday from '../Days/Saturday';
import Sunday from '../Days/Sunday';
import Welcome from '../Days/Welcome';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="friday" element={<Friday />} />
          <Route path="saturday" element={<Saturday />} />
          <Route path="sunday" element={<Sunday />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
