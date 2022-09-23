import axios from "axios";
import {useEffect, useState} from "react";
import {CurrencyListTypes} from "./types";

const useGetCourse = () =>{
    const [currencyList, setCurrencyList] = useState<CurrencyListTypes[]>();
    useEffect(() => {
        axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
           .then(res => setCurrencyList(res.data));
        }
        ,[])
        return currencyList;
}

export default  useGetCourse;
