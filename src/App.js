import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { addUser } from './components/store/usersAction';
import './App.css';

import AccountForm from './components/AccountForm';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'



class App extends Component {

  addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  render() {
    return (
      <div className='App'>
        <div className='router'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
                
              <Route exact path="/Home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
                
              
            </Switch>
          </div>
        </BrowserRouter>
      </div>
        {/*<h1> DAILY EXPENSES<h1/> */}
        <AccountForm addUser={this.addNewUser} />
       

      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  addUser: addUser
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
