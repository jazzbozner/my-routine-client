import React, { Component } from 'react';

class WorkoutCard extends Component {

  state = {
    id: this.props.workout.id,
    exercise_name: this.props.workout.exercise_name,
    reps: this.props.workout.reps,
    sets: this.props.workout.sets,
    weight: this.props.workout.weight
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]:parseInt(event.target.value)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onEditWorkout(this.state)
  }

  render() {
    const { workout } = this.props
    const { exercise_name} = workout
    return (
      <div className="card" >
        <h3>
          Workouts:
        </h3>
        <form className='edit-workout-form'onSubmit={this.handleSubmit}>
          <h3> {exercise_name}</h3>
          <label>Sets</label>
          <input 
            value={this.state.sets}
            onChange={this.handleChange} 
            type='number'
            name='sets'
            className='input-text'
            ></input>
          <label>Reps</label>
          <input 
            value={this.state.reps}
            onChange={this.handleChange} 
            type='number'
            name='reps'
            className='input-text'
            ></input>
          <label>Weight</label>
          <input 
            value={this.state.weight}
            onChange={this.handleChange} 
            type='number'
            name='weight'
            className='input-text'
            ></input>
          <input 
            type="submit" 
            name="submit" 
            value="Save" 
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default WorkoutCard;