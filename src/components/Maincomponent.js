import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './Home'
import Myprofile from './Myprofile'
import InfoForm from './InfoForm'
import Skills from './Skills'
import Signup from './Signup';

class Main extends Component {
    render() {
        return(
            <div>
            <Header />
            {/* <Home /> */}
            {/* <Skills /> */}
            {/* <Myprofile /> */}
            <InfoForm />
            {/* <Signup /> */}
            </div>
        )
    }
    
}

export default Main;