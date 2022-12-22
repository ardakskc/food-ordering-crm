import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Login extends Component {

    /*constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }*/

    state = {
        username: "",
        password: "" 
    };

    onUsernameChange(e) {
        this.setState({
            username : e.target.value
        });
        console.log(this.state.username)
    }

    onPasswordChange(e) {
        this.setState({
            password : e.target.value
        });
        console.log(this.state.password)
    }

    onAddSubmit(e) {
        
    }

    logIn = (e) => {
        /*const [username, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');*/
        this.setState({
            username: e.target.value,
            password: e.target.value
        });
        e.preventDefault();
        
        var proxy = "http://localhost:5000/auth/login"
        //console.warn(username, password);
        console.log(this.state.username+this.state.password)
        let request = { 
            username: this.state.username,
            password: this.state.password
        };
        const headers = { 

                'Accept': 'application.json',
                'Content-Type': 'application/json'
        
        };
        let result = fetch(proxy, {
            method: "post",
            headers: headers,
            body:JSON.stringify(request)
        }).then((response) => response.json())
        .then(json => console.log("request:", request, ", response:", json))
        .then((data) => console.log(data))
        .then(window.location.href = "/itemlist")
        .catch((err) => {
            console.log(err);
        });
    
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="card">
                <h4 className="card-reader">Giriş Yap</h4>
                <div className="card-body">
                    <form onSubmit = {this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Enter Username" 
                                className="form-control" 
                                value={username}
                                onChange = {this.onUsernameChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Enter Password" 
                                className="form-control" 
                                value={password}
                                onChange = {this.onPasswordChange.bind(this)}
                                />
                        </div>
                        <button type="submit" className="btn btn-danger btn-lg" onClick={this.logIn.bind(this)}>Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;