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
      <div className="workout-card" >
        <form className='edit-workout-form'onSubmit={this.handleSubmit}>
          <h3> {exercise_name}</h3>
          <br/>
          <label>Sets</label>
          <br/>
          <input 
            value={this.state.sets}
            onChange={this.handleChange} 
            type='number'
            name='sets'
            className='input-text'
            ></input>
          <br/>
          <label>Reps</label>
          <br/>
          <input 
            value={this.state.reps}
            onChange={this.handleChange} 
            type='number'
            name='reps'
            className='input-text'
            ></input>
          <br/>
          <label>Weight</label>
          <br/>
          <input 
            value={this.state.weight}
            onChange={this.handleChange} 
            type='number'
            name='weight'
            className='input-text'
            ></input>
          <br/>
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