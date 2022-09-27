import React, {FC} from 'react';
import {FistTitleWord, HeaderContainer, HrefStyled, StyledImCoinEuro, TitleContainer} from "./styled";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const API = "https://api.privatbank.ua/#p24/exchange";

const Header: FC = () => {
    const currencyList = useSelector((state:RootState) => state.converter)

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






