import React, {FC, useEffect, useState} from 'react';
import useGetCourse from "../utils/getCourse";
import {Container, Input, Select} from "./styled";
import {currenciesTypes, CurrencyListTypes, currencyValue} from "../utils/types";

const financial = (x:number) => x.toFixed(4);
const Currency: FC = () => {
    const currencyList = useGetCourse();

    const [currencySecond, setCurrencySecond] = useState<string>(currenciesTypes.Dollar);
    const [currencyFirstSum, setCurrencyFirstSum] = useState<number>(1);
    const [currencySecondSum, setCurrencySecondSum] = useState<number>();

    const getCurrency = (type: string) => currencyList?.find((item: CurrencyListTypes) => item.ccy === type)

    useEffect(() => {
        const currentType = getCurrency(currencySecond);
        const result = currencyFirstSum / Number(currentType?.buy);
        setCurrencySecondSum(Number(financial(result)));
    },[ currencySecond, currencyFirstSum, currencySecondSum, currencyList])

    return (
        <Container>
            <Input
                type="number"
                defaultValue={currencyFirstSum}
                onChange={(e)=> setCurrencyFirstSum(Number(e.target.value))}/>
            <Select disabled name="currencyFirst" value={currenciesTypes.Hryvnia} >
                 <option value={currenciesTypes.Hryvnia}>{currenciesTypes.Hryvnia}</option>
            </Select>

            <Input
                type="number"
                value={currencySecondSum || 1}
                onChange={(e)=> setCurrencySecondSum(Number(e.target.value))}/>
            <Select name="currencySecond" onChange={(e)=> setCurrencySecond(e.target.value)}>
                {currencyValue.map((val:string) =>
                    <option key={val} value={val}>{val}</option>
                )}
            </Select>
        </Container>
    );
};

export default Currency;