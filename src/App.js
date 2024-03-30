import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Category from './Components/CategoryPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CategoryPage from './Components/CategoryPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
