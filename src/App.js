import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Footer } from "./components/Footer";
import { Slider } from "./components/Slider";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Login } from "./pages/Login/Login";
import { Sign } from "./pages/Login/Sign";
import { Abo } from "./pages/About/Abo";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
            <div>
              <Slider />
              <span className="tittle">
                <h1>Fashion Wear's</h1>
              </span>
              <Shop />
            </div>} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Abo" element={<Abo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/check" element={<Checkout />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
