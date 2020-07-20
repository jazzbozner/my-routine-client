import React, { Component } from 'react';

class RoutineCard extends Component {

  handleShowRoutine = (event) => {
    this.props.onShowRoutine(event)
  }

  handleDelete = (id) => {
    this.props.onDeleteRoutine(id)
  }

  render() {
    const { routine } = this.props
    const { name, intensity, description, id} = routine
    return (
      <div className="list-card" >
        <h3 onClick={() => this.handleShowRoutine(id)}>{name}</h3>
        <div>Intensity: {intensity}</div>
        <p>Description: {description}</p>
      <button onClick={()=> this.handleDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default RoutineCard;