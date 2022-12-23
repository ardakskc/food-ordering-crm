import React, {Component} from "react";
import Food from "../food.png"

const options = [
    {
        label: "1",
        value: "1"
    }, 
    {
        label: "2",
        value: "2"
    },
    {
        label: "3",
        value: "3"
    },
    {
        label: "4",
        value: "4"
    },
    {
        label: "5",
        value: "5"
    },
]

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_survey: "",
            second_survey: "",
            last_survey: "",
            username: "",
            password: "",
            error_state: false
        }

    }

    onFirstSurveyChange(e) {
        this.setState({
            first_survey : e.target.value
        });
        console.log(this.state.first_survey)
    }

    onSecondSurveyChange(e) {
        this.setState({
            second_survey : e.target.value
        });
        console.log(this.state.second_survey)
    }
    onLastSurveyChange(e) {
        this.setState({
            last_survey : e.target.value
        });
        console.log(this.state.second_survey)
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


    survey = (e) => {
        this.setState({
            first_survey: e.target.value,
            second_survey: e.target.value,
            last_survey: e.target.value,
            username: e.target.value,
            password: e.target.value
        });
        e.preventDefault();
        
        var proxy = "http://localhost:5000/survey"
        //console.warn(username, password);
        console.log(this.state.username+this.state.password)
        let request = { 
            username: this.state.username,
            password: this.state.password,
            first_survey: this.state.first_survey,
            second_survey: this.state.second_survey,
            last_survey: this.state.last_survey,
        };
        const headers = { 

                'Survey': 'application.json',
                'Content-Type': 'application/json'
        
        };
        let result = fetch(proxy, {
            method: "post",
            headers: headers,
            body:JSON.stringify(request)
        }).then((response) => response.json())
        .then(json => {
            console.log("response:", json);
            if(json.status == 'success'){
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
            console.log(err);
        });
    
    }

    render() {
        const {first_survey, second_survey} = this.state;

        return (
            <div className="card w-full h-full items-center justify-between flex flex-col min-h-screen">
                <div className="bg-red-500 relative shadow-lg w-full py-20 flex items-center text-white text-2xl justify-between">
                    <img className="w-full h-full object-cover absolute top-0 opacity-20" src={Food}/>
                    <a className="z-10 px-20 hover:no-underline hover:text-white font-bold" href="/">Yemeksepeti</a>
                    <ul className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold">
                        <li ><a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/marketplace">Geri</a></li>
                        <li onClick="return {this.logOut.bind(this)}" ><a className="z-10 px-20 hover:no-underline hover:text-white text-sm font-semibold" href="/">Logout</a></li>
                    </ul>
                </div>

                <div className=" items-center justify-center flex flex-col gap-y-5 rounded-lg bg-white p-16 border-2 border-[#d43d3d]">
                    <span className="card-reader items-center justify-center font-bold text-[#d43d3d] border-b border-[#d43d3d] w-full text-center">Memnuniyet Anketi</span>
                    <form>
                        <div className="form-group">
                            <label htmlFor="first_survey">Bizi ne kadar seviyorsunuz?</label>
                            <select id="first_survey" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#fff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.onFirstSurveyChange.bind(this)}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="second_survey">Yemeklerimizi ne kadar seviyorsunuz?</label>
                            <select id="second_survey" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#fff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.onSecondSurveyChange.bind(this)}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_survey">Biz sizi ne kadar seviyoruz?</label>
                                <br></br>
                                <input type="radio" id="html" name="fav_language" value="HTML" onChange={this.onLastSurveyChange.bind(this)}></input>
                                <label for="html">5</label>
                                
                        </div>
                    </form>
                    <button type="submit" className="btn btn-danger btn-lg bg-[#d43d3d]" onClick={this.survey.bind(this)}>Anketi Gönder</button>
                </div>
            </div>

        )
    }




}

export default Survey;