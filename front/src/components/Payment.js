import React, {Component} from "react";
import Food from "../food.png";

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            food_obj:JSON.parse(localStorage.getItem("obj")),
            name: JSON.parse(localStorage.getItem("obj")).menu_name,
            id: JSON.parse(localStorage.getItem("obj")).menu_id,
            price: JSON.parse(localStorage.getItem("obj")).price,
            img: this.props.img,
            count: 1,
            loyalty: localStorage.getItem("loyalty_card"),
            showLoyalty: false
        };
    }

    onDiscountButtonClickHandler = () => {
        this.setState({showLoyalty: !this.state.showLoyalty});
    };

    onPayButtonClickHandler = () => {
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
                    <a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/marketplace" >Geri</a>
                    <a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/" onClick="return {this.logOut.bind(this)}" >Logout</a>
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
                            <p>Total Amount:</p>
                            <p>{name}: {price} TL</p>
                            {this.state.showLoyalty && <p>Loyalty Card Discount: {loyalty} TL</p>}
                            {this.state.showLoyalty ? <p>Total: {Number(price) - Number(loyalty)} tl</p> : <p>Total: {price} TL</p>}
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