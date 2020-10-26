import React, { Component } from 'react';
import Header from './NAVBAR/HeaderComponent';
import Home from './HOME/Home'
import Myprofile from './MYPROFILE/Myprofile'
import InfoForm from './INFO-FORM/InfoForm'
import Skills from './SKILLS/Skills'
import Signup from './SIGNUP/Signup';
import Password from './SIGNUP/Password'
import College from './SIGNUP/College'
import Login from './LOGIN/login'
import { Switch, Route , Redirect} from 'react-router-dom'

class Main extends Component {
    render() {
         return (

         
            <div>
            {/* {
                location.pathname != '/' && location.pathname != 'password' && <Header />
            } */}
            {/* <Home /> */}
            {/* <Skills /> */}
            {/* <Myprofile /> */}
            {/* <InfoForm /> */}
            <Switch>
                <Route exact path='/' component={() => <Signup />} />
                <Route exact path='/password' component={() => <Password />} />
                <Route exact path='/college' component={() => <College />} />
                <Route exact path='/login' component={() => <Login />} />
            </Switch>
            {/* <Login /> */}
            </div>
        )
    }
    
}

export default (Main);