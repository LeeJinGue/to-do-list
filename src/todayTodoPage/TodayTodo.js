import addButton from '../assets/button-add.png';
import checkButton from '../assets/button-check.png';
import uncheckButton from '../assets/button-uncheck.png';
import deleteButton from '../assets/button-cancel.png';
import * as S from './TodayTodo.styles';
import { useDispatch, useSelector } from 'react-redux';
import { delItem } from '../redux/store';
const ToDoItem = (props) =>{
  const itemInfo = props.itemInfo;
  const dispatch = useDispatch();
  const onclickCheckBtn = () => {
  }
  const onclickDeleteBtn = () => {
    dispatch(delItem(itemInfo.id));
  }

  return <>
    <S.Item>
      <TitleExplain title={itemInfo.title} explain={itemInfo.explain}></TitleExplain>
      <Time startTime={itemInfo.startTime} endTime={itemInfo.endTime}></Time>
      <S.Button onClick={onclickCheckBtn}>
        <S.CheckButton src={itemInfo.checked? checkButton :uncheckButton }></S.CheckButton>
      </S.Button>
      <S.Button onClick={onclickDeleteBtn}>
        <S.CheckButton src = {deleteButton}></S.CheckButton>
      </S.Button>
    </S.Item>
    </>;
}
const TitleExplain = (props) => {
  
  return<>
    <S.TitleExplain>
      <S.ToDoTitle>{props.title}</S.ToDoTitle>
      <S.ToDoEx>{props.explain}</S.ToDoEx>
    </S.TitleExplain>
  </>;
}
const Time = (props) => {

  return <>
    <S.Time>
      <S.ToDoTime>{props.startTime}</S.ToDoTime>
      <S.ToDoTime>{"~"}</S.ToDoTime>
      <S.ToDoTime>{props.endTime}</S.ToDoTime>
    </S.Time>
  </>;
}
  const AddButton = () => {
    return <>
        <S.Button>
          <S.AddButtonImg src={addButton}></S.AddButtonImg>
        </S.Button>
    </>;
  }
function TodayTodo() {
  const itemList = useSelector(state => state.item.todos)
  console.log("itemList:",itemList);
  return (
    <>
      <S.Page>
        오늘 할 일
      </S.Page>

      <S.List>
        {itemList.map((item) => <ToDoItem itemInfo={item} />)}
        <AddButton />
      </S.List>      
    </>
  );
}

export default TodayTodo;