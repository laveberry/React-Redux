// container로 기존의 리액트 감싸주는 redux 만들기
import AddNumber from "../components/AddNumber";
import React,{Component} from "react";
import store from "../store";

export default class extends Component{
    render(){
        return (
        // <AddNumber onClick={function(){
        //     store.dispatch({type:'INCREMENT', size:this.state.size});
        // }.bind(this)}></AddNumber>
        <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size: size});
        }.bind(this)}></AddNumber>
        );
    }
}