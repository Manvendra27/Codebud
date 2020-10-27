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
                <Header/>
            <Switch>
                <Route exact path='/' component={() => <Signup />} />
                <Route exact path='/password' component={() => <Password />} />
                <Route exact path='/college' component={() => <College />} />
                <Route exact path='/login' component={() => <Login />} />
                <Route exact path='/home' component={() => <Home />} />
                <Route exact path='/skills' component={() => <Skills />} />
                <Route exact path='/myprofile' component={() => <Myprofile />} />
                <Route exact path='/infoform' component={() => <InfoForm />} />
            </Switch>
            </div>
        )
    }
    
}

export default (Main);