import React,{Component} from "react";
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";


export default class extends Component {
    //내부 데이터 생성
    state = {number:store.getState().number}

    //재호출시 생성자
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    
    render(){
        return(
            <DisplayNumber number={this.state.number}></DisplayNumber>
        );
    }
}