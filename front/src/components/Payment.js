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
            count: this.props.count,
            loyalty: 20,
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
       


    render () {
        const {price} = this.state;
        const {img} = this.state;
        const {loyalty} = this.state;
        const {name} = this.state;

        return(

            <div className="container">
                
                <div className="img-div p-10 mt-200">
                    <div className="img">
                        <img src={Food} alt="" />
                    </div>

                    <div className="text mr-50 ml-15 text-center display:inline-block">
                        <text>
                            Price: {price} tl
                        </text>
                    </div>

                    <div className="text">
                        <text>
                            Number: {price} 
                        </text>
                    </div>
                </div>

                <div className="payment-div">

                    <div className="loyalty">
                        <p className="loyaltyText">
                            Loyalty Card Balance: {loyalty} tl
                        </p>
                        <button className="button" onClick={this.onDiscountButtonClickHandler.bind(this)}>
                            Use Discount
                        </button>
                    </div>

                    <div className="totalAmount">
                        <p>Total Amount:</p>
                        <p>_________{name}: {price} tl</p>
                        {this.state.showLoyalty && <p>_________Loyalty Card Discount: {loyalty} tl</p>}
                        {this.state.showLoyalty ? <p>_________Total: {Number(price) - Number(loyalty)} tl</p> : <p>_________Total: {price} tl</p>}
                        <button className="button2" onClick={this.onPayButtonClickHandler.bind(this)}>
                            Pay
                        </button>
                    </div>


                    
                </div>
                

            </div>


        )
    }





}

export default Payment;