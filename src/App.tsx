import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Currency from "./components/Currency";
import {useDispatch} from "react-redux";
import axios from "axios";
import {getCurrencyList} from "./redux/slice";
import {CurrencyListTypes} from "./utils/types";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(res => dispatch(getCurrencyList(res.data)))
    },[])

  return (
    <div className="App">
     <Header/>
     <Currency/>
    </div>
  );
}

export default App;
