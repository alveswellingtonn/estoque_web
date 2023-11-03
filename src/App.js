import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Topbar from './components/topBar/Topbar';
import Sidebar from './components/sideBar/Sidebar';

import Home from './page/home/Home';
import Product from './page/product/Product';
import NewProduct from './page/newProduct/NewProduct';
import Category from './page/category/Category';
import NewCategory from './page/newCategory/NewCategory';

function App() {
  return (

    <BrowserRouter>
      <Topbar />

      <div className='container'>

        <Sidebar />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/new-product' element={<NewProduct/>} />

          <Route path='/category' element={<Category/>} />
          <Route path='/new-category' element={<NewCategory/>} />

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
