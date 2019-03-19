import React from "react";
import "./style.css";

function FriendCard(props) {
  shuffle(){
    this.state.cards.sort(() => Math.random() - 0.5)
    props.handleScore()
  };
  
  return (
    <div className="card">
      <div className="img-container">
        <button onClick={this.shuffle()}><img alt={props.name} src={props.image} /></button>
      </div>
    </div>
  );
}

export default FriendCard;
