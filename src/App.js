import React from 'react'; //include React, { Component }
import NavBar from './components/NavBar'
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Error from './components/Error';
import RoutineContainer from './containers/RoutineContainer'
import ExerciseContainer from './containers/ExerciseContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>  {
  // Do I want to show all Routines
  return (
    <div className='parent'>
      <Router>
        <NavBar />
        <Route /* exact */ path="/routines" component={RoutineContainer} />
        <Route path={'/exercises'} component={ExerciseContainer} />
    </Router>
      </div>
    );
};

export default App;

        //  <Router>
        //   <div>
        //     <Switch>
        //       <Route exact path='/login' component={Login}/>
        //       <Route exact path='/home' component={Home}/>
        //       <Route exact path='/signup' component={Signup}/>
        //       <Route exact path='/error' component={Error}/>
        //       <Route path='*' component={Home}/>
        //     </Switch>
        //   </div>
        // </Router>