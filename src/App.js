import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PropertyDetails from './components/property/PropertyDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Notifications from './components/layout/Notifications'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* using a switch tag to that only one route is loaded up at a time*/}
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/property/:id' component={PropertyDetails}/>          
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/notifications' component={Notifications}/>

        </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
