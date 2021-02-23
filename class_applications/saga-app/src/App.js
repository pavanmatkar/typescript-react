import React from "react";
import { connect } from "react-redux";
class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h1>{this.props.bal}</h1>
        <button onClick={this.props.withdraw}>Withdraw</button>
        <button onClick={this.props.deposit}>Deposit</button>
      </React.Fragment>
    )
  }
};
//subscription
const fun_one = (state)=>{
    return{
      bal : state.bal
    }
  };
  //dispatch
  const fun_two = (dispatch)=>{
    return{
      withdraw : ()=>{ dispatch({type:"WITHDRAW",value:1000}) },
      deposit : ()=>{ dispatch({type:"DEPOSIT",value:10000}) }
    }
  }; 
  export default connect(fun_one,fun_two)(App);


  /*
    button click ==> dispatch ==> store ==> reducer ==> saga middleware ==> withdraw ==> withdraw_gst ==>
    reducer ==> App Component (subscription)
  */