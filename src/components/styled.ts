import styled from "styled-components";
import {ImCoinEuro} from "react-icons/im";

export const HeaderContainer = styled.header`
      display: flex;
      flex-direction: row;
      height: 100px;
      justify-content: space-around;
      align-content: center;
      align-items: center;
      background-color: gold;
      text-decoration: none;
`

export const HrefStyled = styled.a`
      text-decoration: none;
      color: black;
      font-size: 18px;
`
export const TitleContainer = styled.a`
      display: flex;   
      margin-top: 20px;
      font-size: 26px;
      line-height: 1.17;
      letter-spacing: 0.03em;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
`
export const FistTitleWord =  styled.span`
      color: blue;
`
export const StyledImCoinEuro =  styled(ImCoinEuro)`
      margin-left: 4px;
      display: inline-block;
      padding: 0;
`
export const Container = styled.div`
  margin-top: 40px;
  
`
export const Input = styled.input`
  height: 50px;
  width: 200px;
  font-size: 26px;
  border-color: blueviolet;
  :not(:first-child){
    margin-left: 50px;
  }
`
export const Select = styled.select`
  height: 50px;
  width: 200px;
  font-size: 26px;
  border-color: blueviolet;
  margin-left: 20px
`