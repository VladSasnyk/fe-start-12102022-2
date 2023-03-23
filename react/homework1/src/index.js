import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import "../src/main.css";

function CurrencyDate(){
    return (
        <div>Поточний курс валют - {data[0].exchangedate}</div>
    )
}
function Currency(){
    return (
        <div>
            {data.map((element) =>{
                return(
                <div className="currencyFlex">
            <div className='currencyName'> <b> {element.txt}</b>  </div>
            <div className='currencyRate'> {element.rate} </div>
                </div>)
            })}
        </div>
    )
}

ReactDOM.render(<Currency></Currency>, document.getElementById('body'));
ReactDOM.render(<CurrencyDate></CurrencyDate>, document.getElementById('h1'));


