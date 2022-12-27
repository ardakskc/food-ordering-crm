import React, { Component } from 'react'
import Food from "../food.png"

class AccountInfo extends Component {
    constructor(props){
        
        super(props);
        
        this.state = {
            user:{},
        }
    }

    componentDidMount = async() => { 
        const userID=localStorage.getItem("session_userID")
        console.log("response")
        var proxy = "http://localhost:5000/user/account/"+userID
        
        const headers = {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        };
        
        let result = fetch(proxy,{
            method: "get",
            headers: headers,
        }).then((response) => response.json())
        .then(json=>{
            console.log("response:",json);
            this.setState({
                user:json.user,
            });
            
            //status kullanılabilir
        })
        .catch((err) => {
            console.log("error: ",err);
        });
    }

  render() {
    return (
      <div className="card w-full h-full items-center justify-between flex flex-col min-h-screen">
        <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
            <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
            <h1 className='z-10 px-20'>Hesap Bilgileri</h1>
            <ul className="z-10 px-20 gap-x-5 hover:no-underline hover:text-white text-sm font-semibold flex">
                <li ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/marketplace">Geri</a></li>
                <li onClick={() => this.logOut.bind(this)} ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/">Çıkış</a></li>
            </ul>
        </div>
        <div className="my-auto items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
            <ul className='card-reader items-center justify-center font-bold text-black  w-full text-center'>
                <li className='border m-5'>
                    İsim: {this.state.user.first_name}
                </li>
                <li className='border m-5'>
                    Soyisim: {this.state.user.last_name}
                </li>
                <li className='border m-5'>
                    Loyalty Bakiye: {this.state.user.loyalty_card} TL
                </li>
            </ul>
        </div>
            
      </div>
    );
  }
}

export default AccountInfo

