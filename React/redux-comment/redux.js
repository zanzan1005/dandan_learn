const { createStore } = require('redux');
/**
 * [
 * {tabName:'推荐',selected: true},
 * {tabName:'关注',selected: false}
 * ]
 */
function reducer (state = [],action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TABNAME':
      const { tabName,selected } = action;
      return [...state,{
        tabName,
        selected
      }];
    case 'TOGGLE_SELECTED':
      const { index } = action;
      return state.map((tab,i) => {
        if (index === i) {
          return {...tab,selected: true}
        }
        return {...tab,selected: false}
      })
    default: 
      return state;
  }
}
const store = createStore(reducer);
store.subscribe(() => {
  console.log('store', store.getState())
})
// store.dispatch({type:'@@INIT'})
// 要改变数据的时候就要设计type 字段 
// 在 reducer 里面做判断
store.dispatch({
  type: 'ADD_TABNAME',
  tabName: '推荐',
  selected: false
})
store.dispatch({
  type: 'ADD_TABNAME',
  tabName: '关注',
  selected: false
})
//用户点了第几项
store.dispatch({
  type: 'TOGGLE_SELECTED',
  index: 0
})
store.dispatch({
  type: 'TOGGLE_SELECTED',
  index: 1
})