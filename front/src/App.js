import { render } from "@testing-library/react";
import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import "./App.css";

class App extends Component {
  
  render() {

    return (
      //<div className="container d-flex align-items-center justify-content-center" >
        <div>
          
          <BrowserRouter>
            <Routes>
              <Route path="/"element={<Login/>} />
              <Route path="/itemlist"element={<ItemList/>} />
            </Routes>
          </BrowserRouter>

        </div>
        
        
      //</div>
    );

  }

}

export default App;
