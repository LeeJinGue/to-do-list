
import './App.css';
import addButton from './assets/button-add.png';
import checkButton from './assets/button-check.png';
import uncheckButton from './assets/button-uncheck.png';
import deleteButton from './assets/button-cancel.png';
import * as S from './App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { delItem } from './redux/store';
import TodayTodo from './todayTodoPage/TodayTodo';

function App() {
  console.log("리랜더링");
  const itemList = useSelector(state => state.item.todos)
  console.log("itemList:",itemList);
  const itemInfo = {
    title:"제목",
    explain:"설명",
    startTime:"9시",
    endTime:"10시",
    checked:false,
  }
  return (
    <>
    <S.BackStyle>
      <S.TitleStyle>
        To Do List
      </S.TitleStyle>
      <TodayTodo /> 
    </S.BackStyle>
    </>
  );
}

export default App;
