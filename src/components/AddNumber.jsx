import React, {Component} from 'react';
// container로 이동하여 독립된 pre컴포넌트로 만듬
// import store from '../store';

export default class AddNumber extends Component{
    state = {size : 1}
    render(){
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={function(){
                    // 1. 기존방법
                    this.props.onClick(this.state.size);
                    // 2. redux 적용 -> container로 이동해서 주석처리
                    // store.dispatch({type:'INCREMENT', size:this.state.size});
                }.bind(this)}></input>
                <input type="text" value={this.state.size} 
                onChange={function(e){
                    this.setState({size:Number(e.target.value)});
                }.bind(this)}></input>
            </div>
        )
    }
}