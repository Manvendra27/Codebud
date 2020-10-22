import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './Home'
import Myprofile from './Myprofile'
import Skills from './Skills'

class Main extends Component {
    render() {
        return(
            <div>
            <Header />
            {/* <Home /> */}
            {/* <Skills /> */}
            <Myprofile />
            </div>
        )
    }
    
}

export default Main;