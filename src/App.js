import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Category from './Components/CategoryPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CategoryPage from './Components/CategoryPage';
import DetailsPage from './Components/DetailPage'
import Dashboard from './Components/Dashboard';
import ProductScreen from './Components/ProductScreen'
import ProductList from './Components/ProductList'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/news/:slug" element={<DetailsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="AddProduct" element={<ProductScreen />} />
          <Route path="productList" element={<ProductList />} />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
