import { render } from "@testing-library/react";
import React, {Component} from "react";
import Login from "./components/Login";

class App extends Component {
  
  render() {

    return (
      <div className="container d-flex align-items-center justify-content-center" >
        <div>
          
          <h4>YemekSepeti Giriş Sayfası</h4>
          <hr />
          <Login />

        </div>
        
        
      </div>
    );

  }

}

export default App;
