import React, { Component } from 'react';

class RoutineCard extends Component {

  handleClick = () => {
    console.log(this.props.routine)
  }

  handleDelete = (event) => {
    this.props.deleteRoutine(event)
  }

  render() {
    const { routine } = this.props
    const { name, intensity, description, id} = routine
    return (
      <div className="card" >
        <h3 onClick={this.handleClick}>{name}</h3>
        <div>intensity: {intensity}</div>
        <p>Description: {description}</p>
      <button onClick={()=> this.handleDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default RoutineCard;