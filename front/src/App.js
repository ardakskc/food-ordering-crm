import { render } from "@testing-library/react";
import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Card from "./components/Card";
import Marketplace from "./components/Marketplace";
import Payment from "./components/Payment";
import Register from "./components/Register";

class App extends Component {
  
  render() {

    return (
      //<div className="container d-flex align-items-center justify-content-center" >
        <div>
          
          <BrowserRouter>
            <Routes>
              <Route path="/"element={<Login/>} />
              <Route path="/card"element={<Card/>} />
              <Route path="/marketplace"element={<Marketplace/>} />
              <Route path="/payment"element={<Payment/>} />
              <Route path="/register"element={<Register/>} />
            </Routes>
          </BrowserRouter>

        </div>
        
        
      //</div>
    );

  }

}

export default App;
