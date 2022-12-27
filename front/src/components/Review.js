import React, {Component, useState} from "react";
import Food from "../food.png";

const options = [
    {
        default:"5"
    },
    {
        label: "1",
        value: 1
    }, 
    {
        label: "2",
        value: 2
    },
    {
        label: "3",
        value: 3
    },
    {
        label: "4",
        value: 4
    },
    {
        label: "5",
        value: 5
    }
    
]

class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            textValue: "",
            confirm_state: false
        };

    }

    handleRating = (rate) => {
        this.setState({
            rating:rate
        });
        
    };

    onChangeTextValue = (e) => {
        this.setState({
            textValue: e.target.value
        });
    };

    onSubmit = (e) => {        
        this.setState({confirm_state:true})
                setTimeout(function () {
                    this.setState({ confirm_state: false });
                    this.setState({
                        textValue: "",
                        rating:0
                    })
                    window.location.reload();
                    window.location.href = "/marketplace";
                  }.bind(this), 3000);
    };

    render() {
        const {textValue} = this.state;
        return(
            
            <div className="card w-full h-full items-center justify-between flex flex-col gap-y-5">
                <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
                    <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
                    <a className="z-10 px-20 hover:no-underline hover:text-white font-bold" href="/">Yemeksepeti</a>
                </div> 
                <div className="h-full w-full flex flex-col items-center justify-center gap-y-5">
                    <div className=" items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
                
                    <h3>Dilek/Şikayet</h3>
                    <textarea
                        placeholder={"Dilek/Şikayet"}
                        value={textValue}
                        onChange={this.onChangeTextValue.bind(this)}
                        className={"comment-box border-2 border-gray-500"}
                        rows="7"
                        cols="60"
                    />
                
                    <div className="form-group">
                        <label htmlFor="rating">Değerlendirme</label>
                        <select id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#fff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.handleRating.bind(this)}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-danger btn-lg bg-[#d43d3d]" onClick={this.onSubmit.bind(this)}>Gönder</button>

                    </div>
                    {this.state.confirm_state? <div className="flex items-center justify-center bg-[#d43d3d] w-3/4 md:w-1/3 text-xs md:text-base p-3 md:p-4 text-white font-semibold shadow-md rounded-md"> Geri bildiriminiz gönderildi.</div> : null}

                </div>
                
                
                
            </div>


        )
    }

}

export default Review;