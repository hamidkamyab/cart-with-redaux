import * as Vsc from "react-icons/vsc";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100 d-flex flex-column justify-content-between">
        <div className="main">
            <Navbar />
            <Routes>
              <Route path="/" element={<Products/>} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
        </div>

        <div className="footer text-center py-3">
          <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
