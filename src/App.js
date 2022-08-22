
import './App.css';
import addButton from './assets/button-add.png';
import checkButton from './assets/button-check.png';
import { CheckButtonStyle, TimeStyle, TitleExplainStyle, AddButtonImgStyle, BackStyle, TitleStyle, PageStyle, ListStyle,ItemStyle,AddButtonStyle } from './StyledComponent';
import styled from "styled-components";
const ToDoItem = (props) =>{
  return <>
    <ItemStyle>
      <TitleExplain title="제목" sub="설명"></TitleExplain>
      <Time startTime="9시" endTime="10시"></Time>
      <button>
        <CheckButtonStyle src={checkButton}></CheckButtonStyle>
      </button>
    </ItemStyle>
    </>;
}
const TitleExplain = (props) => {
  const ToDoTitleStyle = styled.span`
    color: black;
    font-size: 12pt;
  `;
  const ToDoExStyle = styled.span`
    font-size: 9pt;
    color: grey;
  `
  return<>
    <TitleExplainStyle>
      <ToDoTitleStyle>{props.title}</ToDoTitleStyle>
      <ToDoExStyle>{props.sub}</ToDoExStyle>
    </TitleExplainStyle>
  </>;
}
const Time = (props) => {
  const ToDoTimeStyle = styled.span`
    font-size: 11pt;
  `
  return <>
    <TimeStyle>
    <ToDoTimeStyle>{props.startTime}</ToDoTimeStyle>
    <ToDoTimeStyle>{"~"}</ToDoTimeStyle>
    <ToDoTimeStyle>{props.endTime}</ToDoTimeStyle>
    </TimeStyle>
  </>;
}
  const AddButton = () => {
    return <>
        <button>
          <AddButtonImgStyle src={addButton}></AddButtonImgStyle>
        </button>
    </>;
  }
function App() {
  return (
    <>
    <BackStyle>
      <TitleStyle>
        To Do List
      </TitleStyle>
      <PageStyle>
        오늘 할 일
      </PageStyle>
      <ListStyle>
        <ToDoItem />
        <AddButton />
      </ListStyle>      
    </BackStyle>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
