import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './Home'
import Myprofile from './Myprofile'
import InfoForm from './InfoForm'
import Skills from './Skills'

class Main extends Component {
    render() {
        return(
            <div>
            <Header />
            {/* <Home /> */}
            {/* <Skills /> */}
            {/* <Myprofile /> */}
            <InfoForm />
            </div>
        )
    }
    
}

export default Main;