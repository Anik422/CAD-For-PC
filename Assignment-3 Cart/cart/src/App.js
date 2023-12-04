
import './App.css';
import Navbar from './Components/Navbar';
import ProductPage from './Components/Product/ProductPage';
import CartPage from './Components/Cart/CartPage';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [page, setPage] = useState(true);

  const handlePageView = (value) => {
    if(page !== value){
      setPage(value);
    }   
  }

  return (
    <Provider store={store}>
      <Navbar handlePageView={handlePageView} />
      {page === true ? <ProductPage /> : <CartPage />}
    </Provider>
  );
}

export default App;
