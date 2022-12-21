import React, {Component} from "react";
import axios from "axios"

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

    LogIn = (e) => {
        e.preventDefault();
        var proxy = "http://localhost:5000/auth/login"
        //console.warn(username, password);
        console.log(this.state.username+this.state.password)
        const headers = { 

                'Accept': 'application.json',
                'Content-Type': 'application/json'
        
        };
        axios.post(proxy, {
            username: this.state.username,
            password: this.state.password
          },{headers})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
        const [username, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');
        
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
                        <button type="submit" className="btn btn-danger btn-lg" onClick={this.LogIn.bind(this)}>Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;