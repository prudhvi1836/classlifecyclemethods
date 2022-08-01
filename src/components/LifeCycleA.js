import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {
    constructor(props){
        super(props)
        let state = {
            firstname:'teja'
        }
        console.log("This is constructor lifecycleA")
      }
      static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStatefromProps lifecycleA")
        return null; //it will return state/ null
      }
      componentDidMount(){
        console.log("This is componentDidMount lifecycleA")   
    }
    render() {
        console.log("This is render lifecycleA")
        return (
        <div>            
            <div>lifecycleA</div>
            <LifeCycleB/>
        </div>
        );
    }
}

export default LifeCycleA;
