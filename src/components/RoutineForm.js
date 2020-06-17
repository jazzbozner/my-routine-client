import React, { Component } from 'react';
import { API_ROOT } from '../containers/Constraints'

const INITIAL_STATE = {
  name: '',
  description: '',
  intensity: 1,
  exercises: [],
  selectedExercises: []
}
class RoutineForm extends Component {

  state = INITIAL_STATE

  componentDidMount() {
    this.fetchExercises()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
    })
  }

  handleChecked = (event) => {
    const { exercises, selectedExercises } = this.state
    const { value } = event.target
    return exercises.map(exercise => {
      if (exercise.name === value && !selectedExercises.includes(exercise)) {
        this.setState(prevState => {
          return {selectedExercises: [...prevState.selectedExercises, exercise ]}
        })
      } else if (selectedExercises.includes(exercise)) {
        this.setState(prevState => {
          return {selectedExercises: prevState.selectedExercises.filter(exercise => exercise.name !== value)}
        })
      }
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const routine = {
      name: this.state.name,
      description: this.state.description,
      intensity: this.state.intensity,
      user_id: 2,
      exercises_attributes: this.state.selectedExercises
      }
    this.props.onAddRoutine(routine)
  }

  fetchExercises = () => {
    fetch(API_ROOT + '/exercises')
    .then(resp => resp.json())
    .then(data => this.setState({exercises:data}))
  }

  renderExercises = () => {
    const { exercises } = this.state
    return exercises.map(exercise => {
      return (
        <label key={exercise.id}>
              {exercise.name}
            <input 
              onClick={this.handleChecked}
              type="checkbox" 
              value={exercise.name} 
              name='exercise-select' 
              placeholder="Description..." 
              className="input-text"
            />
          <br/>
        </label>
      )
    })
  }

  render() {
    return (
      <div className="form-container">
        <form className="add-routine-form" onSubmit={this.handleSubmit}>
          <h3>New Routine</h3>
          <input 
            onChange={this.handleChange} 
            value={this.state.name} 
            type="text" 
            name="name" 
            placeholder="Title..." 
            className="input-text"
          />
          <br/>
          <input 
            onChange={this.handleChange} 
            value={this.state.intensity} 
            type="number" 
            name="intensity" 
            placeholder="Title..." 
            className="input-text"
          />
          <br/>
          <input 
            onChange={this.handleChange} 
            value={this.state.description} 
            type="text" 
            name="description" 
            placeholder="Description..." 
            className="input-text"
          />
          <br/>
          {this.renderExercises()}
          <input 
            type="submit" 
            name="submit" 
            value="Submit" 
            className="submit"
          />
        </form>
      </div>
    );
  }

}

export default RoutineForm;