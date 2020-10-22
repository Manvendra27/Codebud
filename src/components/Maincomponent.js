import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './Home'
import Skills from './Skills'

class Main extends Component {
    render() {
        return(
            <div>
            <Header />
            {/* <Home /> */}
            <Skills />
            </div>
        )
    }
    
}

export default Main;