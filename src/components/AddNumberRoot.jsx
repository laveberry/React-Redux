import React, {Component} from "react";
// import AddNumber from "../components/AddNumber";
import AddNumber from "../containers/AddNumber";

export default class AddNumberRoot extends Component{
    render(){
        return(
            <div>
                <h1>Add Number Root</h1>
                {/* <AddNumber number="this.props.number"></AddNumber> */}
                <AddNumber></AddNumber>
            </div>
        )
    }
}