import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumverRoot from "./components/DisplayNumberRoot";


//class방식
class App extends Component{
  state = {number : 0}
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        {/* 기존방식 */}
        {/* <AddNumberRoot onClick={function(size){
          this.setState({number:this.state.number + size});
        }.bind(this)}></AddNumberRoot>
        <DisplayNumverRoot number={this.state.numver}></DisplayNumverRoot> */}

        {/* redux적용 변경방식 */}
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumverRoot></DisplayNumverRoot>
      </div>
    );
  }
}

export default App;
