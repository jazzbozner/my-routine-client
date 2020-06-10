import React, { Component } from 'react';

class RoutineCard extends Component {

  handleClick = () => {
    console.log(this.props.routine.name)
  }

  render() {
    const { routine } = this.props
    const { name, intensity, description} = routine
    return (
      <div className="card" onClick={this.handleClick}>
        <h3>{name}</h3>
        <div>intensity: {intensity}</div>
        <p>Description: {description}</p>
      </div>
    );
  }
}

export default RoutineCard;