import {combineReducers, createStore} from "redux";
import {UPDATE_TITLE} from "./actionTypes";

const playerInitialState = {
  title: 'test Scoreboard',
};
//디폴트 매개변수 (state = playerInitialState)
const playerReducer = (state = playerInitialState, action) => {
  switch(action.type) {
    case UPDATE_TITLE:
      return {
        // 새로운 상태를 리턴 deep copy
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

//숏앤프로프티 키와 값이 같으면 생략
const allReducers = combineReducers({playerReducer});

export const store =
  createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);