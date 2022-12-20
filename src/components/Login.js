import React, {Component} from "react";

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
            [e.target.name] : e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onAddSubmit(e) {
        
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
                        <button type="submit" className="btn btn-danger btn-lg">Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;