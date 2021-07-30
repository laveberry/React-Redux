// container로 기존의 리액트 감싸주는 redux 만들기
import AddNumber from "../components/AddNumber";
import { connect, Connect } from "react-redux";

//3. react-redux인자넣기
function mapDispatchToProps(dispatch){//api호출
    return {
        onClick: function(size){
            dispatch({type:'INCREMENT', size: size});
        }
    }
}

//첫번째인자 : 매핑정보 담은 상태전달props
//두번째인자 : 리덕스 디스패치를 리액트의 프롭스로 연결정보담은 함수
export default connect(null, mapDispatchToProps)(AddNumber);


// 2.react-redux의 connet 함수로 래핑하는 껍데기컴포넌트를 만들어 리턴, 아래코드 다 생략가능
// export default connect()(AddNumber);

// 1.redux 컨테이너 기본
// import React,{Component} from "react";
// import store from "../store";

// export default class extends Component{
//     render(){
//         return (
//         // <AddNumber onClick={function(){
//         //     store.dispatch({type:'INCREMENT', size:this.state.size});
//         // }.bind(this)}></AddNumber>
//         <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size: size});
//         }.bind(this)}></AddNumber>
//         );
//     }
// }