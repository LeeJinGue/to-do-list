import React from "react";
import styled from "styled-components";
const BackStyle = styled.div`
  position: fixed;
  width: 80%;
  height: 90%;  
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: grey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TitleStyle = styled.div`
  height: 10%;
  width: 60%;
  font-size: 40px;
  text-align: center;
`
const PageStyle = styled.div`
  width: 100px;
  height: 10%;
  font-size: 20px;
`
const ListStyle = styled.div`
  width: 70%;
  height: 60%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ItemStyle = styled.div`
  width: 90%;
  justify-content: center;
  margin: 10px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`
const AddButtonStyle = styled.button`
`
const AddButtonImgStyle = styled.img`
  width: 55px;
  height: 55px;
  object-fit: fill;
`
const TitleExplainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
`

const TimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
`
const CheckButtonStyle = styled.img`
  width: 44px;
  height: 44px;
`
export { CheckButtonStyle, TimeStyle, TitleExplainStyle, AddButtonImgStyle, BackStyle, TitleStyle, PageStyle, ListStyle,ItemStyle,AddButtonStyle };
