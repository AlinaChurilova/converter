import React from 'react';
import useGetCourse from "../utils/getCourse";
import {FistTitleWord, HeaderContainer, HrefStyled, StyledImCoinEuro, TitleContainer} from "./styled";

const API = "https://api.privatbank.ua/#p24/exchange";

const Header = () => {
    const currencyList:any = useGetCourse();
    return (
        <HeaderContainer>
            {currencyList && currencyList.map((item:any) => <HrefStyled href={API} key={item.ccy}>
                <span>{item.ccy}</span>
                <p>Sale: {item.sale}</p>
                <p>Buy: {item.buy}</p>
            </HrefStyled> )}
            <TitleContainer href={API}>
                <FistTitleWord>Currency</FistTitleWord>
                <span>Converter</span>
                <StyledImCoinEuro />
            </TitleContainer>
        </HeaderContainer>
    );
};
export default Header;






