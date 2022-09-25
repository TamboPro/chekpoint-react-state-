import React, { Component } from 'react'

export default class counter extends Component {
    state = { count: 0, intervalId: 0 };
    componentDidMount() {
        const newIntervalId = setInterval(() => {
          this.setState(prevState => {
            return {
              ...prevState,
              count: prevState.count + 1,
            };
          });
        }, 1000);
      
        this.setState(prevState => {
          return {
            ...prevState,
            intervalId: newIntervalId,
          };
        });
        
      }
      componentDidUpdate(){
        console.log(this.state.count)
      }

  render() {
    return (
      
        <h1>The component has been rendered for {this.state.count} seconds</h1>
    )
  }
  
}
