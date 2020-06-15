import React, { Component } from 'react';
import { API_ROOT } from './Constraints'
import RoutineCard from '../components/RoutineCard';
import RoutineForm from '../components/RoutineForm'


class RoutineContainer extends Component {

  state = {
    routines:[]
  }

  componentDidMount() {
    this.fetchRoutines()
  }

  // Hard coded user.id
  fetchRoutines = () => {
    fetch(API_ROOT + '/users/1/routines')
    .then(resp => resp.json())
    .then(data => this.setState({routines:data}))
  }

  renderRoutines = () => {
    const { routines } = this.state
    return routines.map(routine => {
      return <RoutineCard routine={routine} key={routine.id} workouts={routine.workouts} />
    })
  }

  // Post Routine
  addRoutine = (routine) => {
    console.log(routine)
    fetch(API_ROOT + '/routines', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(routine)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      // this.setState(prev => {
      // return {routines: [...prev.routines, data]}
      // })
    })
  }


  render() {
    return (
      <div className='routine-collection'>
        <RoutineForm onAddRoutine={this.addRoutine}/>
        <br />
        Routines:
        {this.renderRoutines()}
      </div>
    )
  }
};

export default RoutineContainer;