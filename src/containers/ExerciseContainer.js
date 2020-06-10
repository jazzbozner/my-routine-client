import React, { Component } from 'react';
import { API_ROOT } from './Constraints'
import ExerciseCard from '../components/ExerciseCard';


class ExerciseContainer extends Component {

  state = {
    exercises:[]
  }

  componentDidMount() {
    this.fetchExercises()
  }

  fetchExercises = () => {
    fetch(API_ROOT + '/exercises')
    .then(resp => resp.json())
    .then(data => this.setState({exercises:data}))
  }

  renderExercises = () => {
    const { exercises } = this.state
    return exercises.map(exercise => {
      return <ExerciseCard exercise={exercise} key={exercise.id} />
    })
  }

  render() {
    return (
      <div className='exercise-collection'>
        Exercises
        {this.renderExercises()}
      </div>
    )
  }
};

export default ExerciseContainer;