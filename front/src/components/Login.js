import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "../food.png"

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            error_state: false
        };
    }

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
        .then(json => {
            console.log("response:", json);
            if(json.status == 'success'){
                window.location.href = "/marketplace";
            }
            else{
                this.setState({error_state:true})
                setTimeout(function () {
                    this.setState({ error_state: false });
                  }.bind(this), 3000);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="card w-full h-full items-center justify-between flex flex-col min-h-screen">
                <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
                    <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
                    <a className="z-10 px-20 hover:no-underline hover:text-white font-bold" href="/">Yemeksepeti</a>
                    <a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/">Kayıt Ol</a>
                </div>
                <div className=" items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
                <span className="card-reader items-center justify-center font-bold text-[#d43d3d] border-b border-[#d43d3d] w-full text-center">Giriş Yap</span>
                    <form onSubmit = {this.onAddSubmit.bind(this)}>
                        <div className="form-group gap-y-5">
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
                    </form>
                    <button type="submit" className="btn btn-danger btn-lg bg-[#d43d3d]" onClick={this.logIn.bind(this)}>Log In</button>
                </div>
                <div></div>
                {this.state.error_state? <div className="flex items-center justify-center bg-[#d43d3d] w-3/4 md:w-1/3 text-xs md:text-base p-3 md:p-4 text-white font-semibold shadow-md rounded-md"> Hatalı giriş yapıldı.</div> : null}
            </div>
        );
    }
}
export default Login;