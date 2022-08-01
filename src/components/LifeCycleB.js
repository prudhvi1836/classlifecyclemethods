import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        let state = {
            firstname:'teja'
        }
        console.log("This is constructor LifeCycleB")
      }
      static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStatefromProps LifeCycleB")
        return null; //it will return state/ null
      }
      componentDidMount(){
        console.log("This is componentDidMount lifecycleB")   
    }
    render() {
        console.log("This is render lifecycleB")
        return (
            <div>
                LifeCycleB
            </div>
        );
    }
}

export default LifeCycleB;
