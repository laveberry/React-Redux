import React, {Componet} from 'react';
import store from "../store";

export default class DisplayNumber extends Componet {
    //내부 데이터 생성
    state = {number:store.getState(), number}
    //재호출시 생성자
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render(){
        return (
            <div>
                <h1>Display Number</h1>
                {/* <input type="text" value={this.props.number} readOnly/> */}
                <input type="text" value={this.state.number} readOnly/>
            </div>
        )
            
        
    }
}
