import styled from "styled-components"
export const Page = styled.div`
  width: 100px;
  height: 10%;
  font-size: 20px;
`
export const List = styled.div`
  width: 70%;
  height: 60%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x:hidden;
`
export const Item = styled.div`
  width: 90%;
  justify-content: center;
  margin: 10px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`
export const AddButton = styled.button`
`
export const AddButtonImg = styled.img`
  width: 55px;
  height: 55px;
  object-fit: fill;
`
export const TitleExplain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15%;
`
export const Button = styled.button`
&:hover{
  opacity:0.5;
};
background-color:white;
border: 0px;
`
export const CheckButton = styled.img`
  width: 44px;
  height: 44px;
`
export const ToDoTitle = styled.span`
  color: black;
  font-size: 12pt;
`;
export const ToDoEx = styled.span`
  font-size: 9pt;
  color: grey;
`
export const ToDoTime = styled.span`
font-size: 11pt;
`