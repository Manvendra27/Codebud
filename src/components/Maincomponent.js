import React, { Component } from 'react';
import Header from './NAVBAR/HeaderComponent';
import Home from './HOME/Home'
import Myprofile from './MYPROFILE/Myprofile'
import InfoForm from './INFO-FORM/InfoForm'
import Skills from './SKILLS/Skills'
import Signup from './SIGNUP/Signup';
import Password from './SIGNUP/Password'
import College from './SIGNUP/College'

class Main extends Component {
    render() {
        return(
            <div>
            {/* <Header /> */}
            {/* <Home /> */}
            {/* <Skills /> */}
            {/* <Myprofile /> */}
            {/* <InfoForm /> */}
            {/* <Signup /> */}
            {/* <Password /> */}
            <College />
            </div>
        )
    }
    
}

export default Main;