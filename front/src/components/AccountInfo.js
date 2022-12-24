import React, { Component } from 'react'
import Food from "../food.png"

class AccountInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            loyalty_card:""
        }
    }
    information = (e) => { 
        this.setState({
            first_name: e.target.value,
            last_name: e.target.value,
            loyalty_card: e.target.value
        });
        e.preventDefault();

        var proxy = "http://localhost:5000/survey"

        let request = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            loyalty_card: this.state.loyalty_card,
        };
        const headers = {
            'AccInfo': 'application.json',
            'Content-Type': 'application/json'
        };
        let result = fetch(proxy,{
            method: "get",
            headers: headers,
            body:JSON.stringify(request)
        }).then((response) => response.json())
        .then(json=>{
            console.log("response:",json);
            //status kullanılabilir
        })
        .catch((err) => {
            console.log(err);
        });
    }
  render() {
    return (
      <div className="card w-full h-full items-center justify-between flex flex-col min-h-screen">
        <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
            <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
            <h1 className='z-10 px-20'>Hesap Bilgileri</h1>
            <ul className="z-10 hover:no-underline hover:text-white text-sm font-semibold">
                <li ><a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/marketplace">Geri</a></li>
                <li onClick="return {this.logOut.bind(this)}" ><a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/">Logout</a></li>
            </ul>
        </div>
        <div className="my-auto items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
            <ul className='card-reader items-center justify-center font-bold text-black  w-full text-center'>
                <li className='border m-5'>
                    İsim: {this.state.first_name}
                </li>
                <li className='border m-5'>
                    Soyisim: {this.state.last_name}
                </li>
                <li className='border m-5'>
                    Loyalty Bakiye: {this.state.loyalty_card}
                </li>
            </ul>
        </div>
            
      </div>
    )
  }
}

export default AccountInfo

