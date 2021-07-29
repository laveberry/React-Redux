import {createStore} from 'redux';

// 리듀서 : 두개의 인자 받음 state(데이터), action(가해지는행위)
// redux devtool 설정
export default createStore(function(state, action){
    
    //if문 설정
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        //...값 : state 복제, 추가되는 프로퍼티
        return {...state, number:state.number + action.size}
    }

    return state;

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)