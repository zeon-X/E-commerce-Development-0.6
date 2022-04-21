import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import ShopInvertory from './components/ShopInventory/ShopInvertory';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        {/* <Route path='/order' element={<Order />} /> */}
        <Route path='/orderReview' element={<OrderReview />} />
        <Route path='/manageInverntory' element={<ShopInvertory />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
