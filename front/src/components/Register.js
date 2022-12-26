import React, {Component} from "react";
import Food from "../food.png"

const options = [
    {
        default:"Male"
    },
    {
        label: "Erkek",
        value: "Male"
    }, 
    {
        label: "Kadın",
        value: "Female"
    },
    
]

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            gender: "",
            phone_number: "",
            reference: "",
            error_state: false
        }

    }

    onNameChange(e) {
        this.setState({
            first_name : e.target.value
        });
    }

    onLastNameChange(e) {
        this.setState({
            last_name : e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email : e.target.value
        });
    }

    onUsernameChange(e) {
        this.setState({
            username : e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password : e.target.value
        });
    }
    
    onGenderChange(e) {
        this.setState({
            gender : e.target.value
        });
    }

    onPhoneChange(e) {
        this.setState({
            phone_number : e.target.value
        });
    }

    onReferenceChange(e) {
        this.setState({
            reference : e.target.value
        });
    }

    register = (e) => {
        this.setState({
            first_name: e.target.value,
            last_name: e.target.value,
            email: e.target.value,
            username: e.target.value,
            password: e.target.value,
            gender: e.target.value,
            phone_number: e.target.value,
            reference: e.target.value
        });
        e.preventDefault();
        
        var proxy = "http://localhost:5000/auth/register"
        //console.warn(username, password);
        console.log(this.state.username+this.state.password)
        let request = { 
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            gender: this.state.gender,
            phone_number: this.state.phone_number,
            reference: this.state.reference
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
                window.location.href = "/login";
            }
            else{
                this.setState({error_state:true})
                setTimeout(function () {
                    this.setState({ error_state: false });
                  }.bind(this), 3000);
            }
        })
        .catch((err) => {
            this.setState({error_state:true})
                setTimeout(function () {
                    this.setState({ error_state: false });
                  }.bind(this), 3000);
            console.log(err);
        });
    
    }

    render() {
        const {first_name, last_name, email, username, password, gender, phone_number, reference} = this.state;

        return (
            <div className="card w-full h-full items-center justify-between flex flex-col min-h-screen">
                <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
                    <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
                    <a className="z-10 px-20 hover:no-underline hover:text-white font-bold" href="/">Yemeksepeti</a>
                </div>

                <div className=" items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
                    <span className="card-reader items-center justify-center font-bold text-[#d43d3d] border-b border-[#d43d3d] w-full text-center">Kayıt Ol</span>
                    <form>
                        <div className="form-group gap-y-5">
                            <label htmlFor="name">İsim</label>
                            <input 
                                type="text" 
                                name="first_name" 
                                id="first_name" 
                                placeholder="İsim" 
                                className="form-control" 
                                value={first_name}
                                onChange = {this.onNameChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Soyisim</label>
                            <input 
                                type="text" 
                                name="last_name" 
                                id="last_name" 
                                placeholder="Soyisim" 
                                className="form-control" 
                                value={last_name}
                                onChange = {this.onLastNameChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="example@example.com" 
                                className="form-control" 
                                value={email}
                                onChange = {this.onEmailChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Kullanıcı Adı</label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Kullanıcı Adı" 
                                className="form-control" 
                                value={username}
                                onChange = {this.onUsernameChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Şifre</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Şifre" 
                                className="form-control" 
                                value={password}
                                onChange = {this.onPasswordChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Cinsiyet</label>
                            <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#fff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.onGenderChange.bind(this)}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefon</label>
                            <input 
                                type="phone" 
                                name="phone_number" 
                                id="phone_number" 
                                placeholder="(5xx) xxxxxxx" 
                                className="form-control" 
                                value={phone_number}
                                onChange = {this.onPhoneChange.bind(this)}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reference">Referans</label>
                            <input 
                                type="reference" 
                                name="reference" 
                                id="reference" 
                                placeholder="Referans Kullanıcı Adı" 
                                className="form-control" 
                                value={reference}
                                onChange = {this.onReferenceChange.bind(this)}
                                />
                        </div>
                    </form>
                    <button type="submit" className="btn btn-danger btn-lg bg-[#d43d3d]" onClick={this.register.bind(this)}>Kayıt Ol</button>
                </div>
                <div></div>
                {this.state.error_state? <div className="flex items-center justify-center  bg-[#d43d3d] w-3/4 md:w-1/3 text-xs md:text-base p-3 md:p-4 text-white font-semibold shadow-md rounded-md"> Hatalı referans Bilgisi</div> : null}
            </div>

        )
    }




}

export default Register;