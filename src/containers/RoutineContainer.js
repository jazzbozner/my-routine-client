import React, { Component } from 'react';
import { API_ROOT } from './Constraints'
import RoutineCard from '../components/RoutineCard';
import RoutineForm from '../components/RoutineForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class RoutineContainer extends Component {

  state = {
    routines:[]
  }

  componentDidMount() {
    this.fetchRoutines()
  }

  // Hard coded user.id
  fetchRoutines = () => {
    fetch(API_ROOT + '/users/2/routines')
    .then(resp => resp.json())
    .then(data => this.setState({routines:data}))
  }

  renderRoutines = () => {
    const { routines } = this.state
    return routines.map(routine => {
      return <RoutineCard routine={routine} key={routine.id} workouts={routine.workouts} deleteRoutine={this.deleteRoutine}/>
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
      this.setState(prev => {
      return {routines: [...prev.routines, data]}
      })
    })
  }

  // DELETE Routine
  deleteRoutine = (routineId) => {
    fetch(`http://localhost:3000/api/v1/users/2/routines/${routineId}`, {method: 'DELETE'})
    .then(() => {
      this.setState(prevState => {
        return {routines: prevState.routines.filter(routine => routine.id !== routineId)}
      })
    })
  }


  render() {
    return (
      <div className='routine-collection'>
        <Router>
          <Route exact path='/routine/form' render={() => console.log('routine/form')} />
          <RoutineForm onAddRoutine={this.addRoutine} />
          <br/>
          Routines:
          {this.renderRoutines()}
        </Router>
      </div>
    )
  }
};

export default RoutineContainer;