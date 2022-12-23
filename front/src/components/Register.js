import React, {Component} from "react";
import Food from "../food.png"

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
            id: this.props.state
        }

    }

    onNameChange(e) {
        this.setState({
            first_name : e.target.value
        });
        console.log(this.state.first_name)
    }

    onLastNameChange(e) {
        this.setState({
            last_name : e.target.value
        });
        console.log(this.state.last_name)
    }

    onEmailChange(e) {
        this.setState({
            email : e.target.value
        });
        console.log(this.state.email)
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
    
    onGenderChange(e) {
        this.setState({
            gender : e.target.value
        });
        console.log(this.state.gender)
    }

    onPhoneChange(e) {
        this.setState({
            phone_number : e.target.value
        });
        console.log(this.state.phone_number)
    }




    render() {
        const {first_name, last_name, email, username, password, gender, phone_number} = this.state;

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
                            <label for="gender">Cinsiyet</label>
                            <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.onGenderChange.bind(this)}>
                                <option value={gender}>Erkek</option>
                                <option value={gender}>Kadın</option>
                                <option value={gender} selected>Seç</option>
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
                    </form>
                </div>
            </div>

        )
    }




}

export default Register;