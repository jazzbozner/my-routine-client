import React, { Component } from 'react';

class ExerciseCard extends Component {

  handleClick = () => {
    console.log(this.props.exercise.name)
  }

  render() {
    const { exercise } = this.props
    const { name, muscle_target, description} = exercise
    return (
      <div className="card" onClick={this.handleClick}>
        <h3>{name}</h3>
        <div>{muscle_target}</div>
        <p>Description: {description}</p>
      </div>
    )
  }
}

export default ExerciseCard;