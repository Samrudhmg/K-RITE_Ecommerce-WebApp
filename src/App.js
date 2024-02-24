import './App.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import CheckoutPage from './components/CheckoutPage/checkoutPage';
import Finish from './pages/Finish/Finish';





function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Router>
          <Header />
          

          <Routes>
        
            <Route path = "/" element = {<Home />} />
        
            <Route path = "/product/:id" element = {<ProductSingle />} />
          
            <Route path = "/category/:category" element = {<CategoryProduct />} />

            <Route path = "/cart" element = {<Cart />} />
  
            <Route path = "/search/:searchTerm" element = {<Search />} />

            <Route path = "/checkout" element = {<CheckoutPage/>} />

            <Route path = "/finish" element = {<Finish/>} />

            

          </Routes>

          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
