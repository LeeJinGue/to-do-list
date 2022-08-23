import React from 'react';
import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage
}
const INITIAL_STATE = {
  todos: [
    {
      id:0,
      title:"제목",
      explain:"설명",
      startTime:"시작시간",
      endTime:"종료시간",
      checked:false,
    },
    {
      id:1,
      title:"제목",
      explain:"설명",
      startTime:"시작시간",
      endTime:"종료시간",
      checked:true,
    },
    {
      id:2,
      title:"제목",
      explain:"설명",
      startTime:"시작시간",
      endTime:"종료시간",
      checked:false,
    },
    {
      id:3,
      title:"제목",
      explain:"설명",
      startTime:"시작시간",
      endTime:"종료시간",
      checked:true,
    },
    {
      id:4,
      title:"제목",
      explain:"설명",
      startTime:"시작시간",
      endTime:"종료시간",
      checked:false,
    },
  ],
}

let id = 1;
export const addItem = (todo) => {
  return {
    type: "ADD_ITEM",
    todo: {
      id:id++,
      title:todo.title,
      explain:todo.explain,
      startTime:todo.startTime,
      endTime:todo.endTime,
      checked:false,
    }
  }
}
export const delItem = (id) => {
  return {
    type: "DEL_ITEM",
    id,
  }
}
const itemInfoReducer = (state = INITIAL_STATE, action) => {
  console.log('item Reducer 실행', state, action);
  switch (action.type){
    case "ADD_ITEM":
      return {
        todos: [...state.todos, action.todo]
      }
    case "DEL_ITEM":
      return {
        todos: [...state.todos.filter(itemInfo => {
        return itemInfo.id !== action.id
      })],
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers( {
  item: persistReducer(persistConfig, itemInfoReducer),
})

const store = createStore(rootReducer);
const persistor = persistStore(store);
export {store, persistor};