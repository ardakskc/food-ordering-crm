import React, { Component } from 'react'
import Food from "../food.png"

class Statistic extends Component {
    constructor(props){
        
        super(props);
        
        this.state = {
            loyalty_user:{},
            best_user: {},
            best_food: {}
        }
    }

    componentDidMount = async() => { 

        const userID=localStorage.getItem("session_userID")
        console.log("response")
        var proxyLoyalty = "http://localhost:5000/user/getGreatest"
        var proxyBest = "http://localhost:5000/user/getBestCustomer"
        var proxyFood = "http://localhost:5000/user/getBestFood"

        
        const headers = {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        };
        
        let result = fetch(proxyLoyalty,{
            method: "get",
            headers: headers,
        }).then((response) => response.json())
        .then(json=>{
            console.log("response:",json);
            this.setState({
                loyalty_user:json.user,
            });
            console.log(this.state.loyalty_user);
            
            //status kullanılabilir
        })
        .catch((err) => {
            console.log("error: ",err);
        });

        //get best customer
        fetch(proxyBest,{
            method: "get",
            headers: headers,
        }).then((response) => response.json())
        .then(json=>{
            console.log("response:",json);
            this.setState({
                best_user:json.user,
            });
            console.log(this.state.best_user);
            
            //status kullanılabilir
        })
        .catch((err) => {
            console.log("error: ",err);
        });

        //get best customer
        fetch(proxyFood,{
            method: "get",
            headers: headers,
        }).then((response) => response.json())
        .then(json=>{
            console.log("response:",json);
            this.setState({
                best_food:json.food,
            });
            console.log(this.state.best_food);
            
            //status kullanılabilir
        })
        .catch((err) => {
            console.log("error: ",err);
        });
        

        
    }

  render() {
    return (
      <div className="card w-full h-full items-center justify-between flex flex-col min-h-screen gap-y-5">
        <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
            <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
            <h1 className='z-10 px-20'>İstatistik Bilgileri</h1>
            <ul className="z-10 px-20 gap-x-5 hover:no-underline hover:text-white text-sm font-semibold flex">
                <li ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/marketplace">Geri</a></li>
                <li onClick={() => this.logOut.bind(this)} ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/">Çıkış</a></li>
            </ul>
        </div>
        <div className="my-auto items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
            <ul className='flex flex-col items-center justify-center font-bold text-black gap-y-5 w-full text-center'>
                <li className='border p-2'>
                    En İyi Müşteri: <span className='font-normal'>{this.state.best_user.first_name+" "+this.state.best_user.last_name}</span>
                </li>
                <li className='border p-2'>
                    En Az İlgili Müşteri: <span className='font-normal'>Boş</span>
                </li>
                <li className='border p-2'>
                    En Fazla Loyalt Bakiyesine Sahip Müşteri: <span className='font-normal'>{this.state.loyalty_user.first_name+" "+this.state.loyalty_user.last_name}</span>
                </li>
                <li className='border p-2'>
                    En Çok Satılan Ürün: <span className='font-normal'>Bos</span>
                </li>
            </ul>
        </div>
            
      </div>
    );
  }
}

export default Statistic
