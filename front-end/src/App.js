import logo from './logo.svg';
import './App.css';
import Product from './pages/Product/Product';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Main />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
