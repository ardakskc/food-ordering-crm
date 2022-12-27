import React, { Component } from "react";
import Card from "./Card"
import Food from "../food.png"

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFoods : [],
    };
    this.buyButtonClick = this.buyButtonClick.bind(this)
  }


  componentDidMount = async () => {
    var proxy = "http://localhost:5000/foods"

    const headers = { 

            'Accept': 'application.json',
            'Content-Type': 'application/json'
    
    };
    let result = fetch(proxy, {
        method: "get",
        headers: headers,
    }).then((response) => response.json())
    .then(json => {
        console.log("response:", json)
        this.setState({ allFoods: json.Foods})
        })
    .catch((err) => {
        console.log(err);
    });

  }


  buyButtonClick(){

  }

  render() {
    //RESIM YUKLEMEYI DUZENLE
    return (
      <div className="w-full bg-gray-100 items-center justify-between flex flex-col min-h-screen gap-y-2">
        <div className="flex flex-col w-full ">
        <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
            <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
            <a className="z-10 px-20 hover:no-underline hover:text-white" href="/marketplace">Yemek Listesi</a>
            <ul className="z-10 px-20 gap-x-5 hover:no-underline hover:text-white text-sm font-semibold flex">
              <li><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/user/account">Hesap Bilgileri</a></li>
              <li ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/survey">Anket</a></li>
              <li ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/statistic">İstatistikler</a></li>
              <li ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/user/review">Değerlendirme</a></li>
              <li onClick={() => this.logOut.bind(this)} ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/">Çıkış</a></li>
            </ul>
          </div>
          </div>
        <div className="w-[95%] bg-gray-100 p-16 rounded-xl flex flex-wrap overflow-x-hidden">
        <div className="flex gap-x-4 gap-y-8 h-full flex-wrap justify-center">
          {this.state.allFoods.map((food) => {
            return(
              <Card 
                key={food.menu_id}
                food_obj={food}
                img={food.image_url}
                menu_id={food._id}
                menu_name={food.menu_name} 
                menu_desc={food.menu_name.split(" ")[1]}
                menu_pr={food.price}
              />
            )
          })}
          
        </div>
        </div>
      </div>
    );
  }
}

export default Marketplace;
