import React from 'react';
import Nav from './components/nav/Nav';
import {Route } from "react-router-dom";
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/user/UserContainer';
import ProfileContainer from './components/Content/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer ';
import Login from './components/login/login';
import classes from './App.module.css'

class App extends React.Component{
  componentDidMount(){
    
  }

  render(){
    return (
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <Route path='/' component={HeaderContainer} />
        <Nav />
        <div className={classes.appWrapperModule}>
  
          <Route path='/messages' render={() => <DialogsContainer/>} />
  
  
          <Route path='/profile:userId?' render={() => <ProfileContainer  />} />
  
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' render={() => <Login />} />
  
        </div>
      </div>
    )
  }
}

export default App;