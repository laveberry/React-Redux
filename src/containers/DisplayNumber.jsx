import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state){
    //리턴값 객체
    return {
        // redux에서 store의 값이 변경될때마다 공급해준 함수가 그때마다 호출
        number : state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// export default connect()(DisplayNumber);

// import React,{Component} from "react";
// import store from "../store";
// export default class extends Component {
//     //내부 데이터 생성, 초기화
//     state = {number:store.getState().number}

//     //재호출시 생성자
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this));
//     }
    
//     render(){
//         return(
//             <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
//         );
//     }
// }