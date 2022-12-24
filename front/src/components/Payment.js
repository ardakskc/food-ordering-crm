import React, {Component} from "react";
import Food from "../food.png";

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            food_obj:JSON.parse(localStorage.getItem("obj")),
            name: JSON.parse(localStorage.getItem("obj")).menu_name,
            id: JSON.parse(localStorage.getItem("obj"))._id,
            price: JSON.parse(localStorage.getItem("obj")).price,
            img: this.props.img,
            count: 1,
            loyalty: localStorage.getItem("loyalty_card"),
            showLoyalty: false,
            userID:localStorage.getItem("session_userID")
        };
    }

    onDiscountButtonClickHandler = () => {
        this.setState({showLoyalty: !this.state.showLoyalty});
    };

    onPayButtonClickHandler = (e) => {
        
        e.preventDefault();
        
        var proxy = "http://localhost:5000/foods/payment"

        let request = { 
            menu_id:this.state.id,
            count:this.state.count,
            price:this.state.price,
            loyalty:this.state.showLoyalty,
            userID:this.state.userID
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
            if(json.status == 'success'){
                localStorage.setItem("loyalty_card",JSON.stringify(json.loyalty))
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
            this.setState({error_state:true})
                setTimeout(function () {
                    this.setState({ error_state: false });
                  }.bind(this), 3000);
        });
        this.setState({
            loyalty: 0
        })
    };
    
    logOut = (e) => {
        /*const [username, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');*/
        
        e.preventDefault();
        
        var proxy = "http://localhost:5000/auth/logout"
        //console.warn(username, password);
        const headers = { 

                'Accept': 'application.json',
                'Content-Type': 'application/json'
        
        };
        let result = fetch(proxy, {
            method: "post",
            headers: headers,
        }).then((response) => response.json())
        .then(json => {
            console.log("response:", json.data.loyalty_card);
            if(json.status == 'success'){
            }
            else{
            }
        })
        .catch((err) => {
            console.log(err);
        });
    
    }
       


    render () {
        const {price} = this.state;
        const {img} = this.state;
        const {loyalty} = this.state;
        const {name} = this.state;
        const {count} =this.state;

        return(
            <div>
                <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
                    <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
                    <a className="z-10 px-20 hover:no-underline hover:text-white" href="/payment">Sepet</a>
                    <ul className="z-10 px-20 gap-x-5 hover:no-underline hover:text-white text-sm font-semibold flex">
                        <li ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/marketplace">Geri</a></li>
                        <li onClick="return {this.logOut.bind(this)}" ><a className="z-10 hover:no-underline hover:text-white text-sm font-semibold" href="/">Çıkış</a></li>
                    </ul>
                </div>
                <div className="w-full bg-gray-100 p-16 rounded-xl flex flex-wrap overflow-x-hidden justify-center gap-x-20">
                    
                    <div className="flex flex-col gap-y-5 items-center rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
                        <div className="">
                            <img src={Food} alt="" />
                        </div>

                        <div className="text-lg underline font-semibold">
                            <text>
                                Fiyat: {price} TL
                            </text>
                        </div>

                        <div className="text-lg underline font-semibold">
                            <text>
                                Adet: {count} 
                            </text>
                        </div>
                    </div>

                    <div className="flex flex-col font-semibold gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">

                        <div className="flex flex-col items-center gap-y-5">
                            <p className="text-lg ">
                                Loyalty Kart Bakiyesi: {loyalty} TL
                            </p>
                            <button className="button2" onClick={this.onDiscountButtonClickHandler.bind(this)}>
                                İndirim Kullan
                            </button>
                        </div>

                        <div className="totalAmount text-lg  flex flex-col items-center gap-y-5">
                            <p>Toplam Tutar:</p>
                            <p>{name}: {price} TL</p>
                            {this.state.showLoyalty && <p>Loyalty Kart İndirimi: {loyalty} TL</p>}
                            {this.state.showLoyalty ? <p>Toplam: {Number(price) - Number(loyalty)} TL</p> : <p>Toplam: {price} TL</p>}
                            <button className="button2" onClick={this.onPayButtonClickHandler.bind(this)}>
                                Ödeme Yap
                            </button>
                        </div>


                        
                    </div>
                    

                </div>
                
            </div>


        )
    }





}

export default Payment;