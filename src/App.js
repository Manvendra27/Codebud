import React,{ Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Main from '../src/components/Maincomponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render () {

  
  return (

    <BrowserRouter>
    <div>
    <Main />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
