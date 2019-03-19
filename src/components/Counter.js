import React from "react";

class Counter extends React.Component {
    state = {
      currentScore: 0
    };
  
    handleScore = () => {
      this.setState({ currentScore: this.state.currentScore + 1 });
  }
  
    
  
    render() {
      return (
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
          <p className="card-text">Current Score: {this.state.currentScore}</p>
          <p className="card-text">High Score: {this.state.currentScore}</p>
          </div>
        </div>
      );
    }
  }

  export default Counter;