import React, { Component } from "react";
import Food from "../food.png"

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      
      <div className="flex flex-col w-72 h-[420px] min-w-max  bg-white border shadow-lg rounded-2xl items-center justify-between">
        <div className="py-4 flex flex-col items-center justify-between w-full h-full">

       
        <img src={this.props.img} className="w-48 h-32 bg-black rounded-2xl " />
        <span className="font-semibold">{this.props.menu_name}</span>
        <span className="text-xs">{this.props.menu_desc}</span>
        <div className="border border-gray-700 w-4/5"></div>
        <span className="">{this.props.menu_pr} TL</span>
        <div className="flex flex-col gap-y-4 items-center justify-center text-sm">
            <button className={"py-1 px-12 bg-[#d43d3d] shadow-lg rounded-lg hover:bg-red-500 text-white font-bold "} onClick={()=>{console.log("Buy");localStorage.setItem("obj",JSON.stringify(this.props.food_obj));window.location.href="/payment"}}>Satın Al</button>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Card;
