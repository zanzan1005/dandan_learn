const { createStore,combineReducers } = require('redux');
// action.type 常量 决定了这次dispatch要干什么 唯一的标识
//reducer 可以收到 action 的信息
const add = {
  type: 'INCREMENT'
}
const reduce = {
  type: 'DECREMENT'
}
// 加一部电影 ADD_FILM
//type + payload
function filmReducer(state = [],action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state,action.film] //返回一份新的数据
    default :
      return state;
  }
}
function reducer (state,action) {
  console.log('reducer->>>>>>>>>',action)
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return 0;
  }
}
const index = combineReducers({
  count: reducer,
  films: filmReducer
})
//createStore 只接受 reducer
const store = createStore(index);
store.subscribe(() => {
  console.log(store.getState());
})//订阅者
// console.log(store.getState());
//0
store.dispatch(add);
store.dispatch(add);
// console.log(store.getState());
store.dispatch(reduce);
// console.log(store.getState());
//每次dispatch 都会触发 reducer 一次
store.dispatch({
  type: 'ADD_FILM',
  a: 1,
  b: 2,
  c: 3,
  id: 0,
  film: {name:'狮子王'}
})
