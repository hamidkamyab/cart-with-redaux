import * as Vsc from "react-icons/vsc";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main">
          <Navbar />
          <Products />
          {/* <Cart /> */}
      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
