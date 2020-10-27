import React,{ Component } from 'react';
import Header from './components/NAVBAR/HeaderComponent'
import Main from '../src/components/Maincomponent'
import './App.css';
import { BrowserRouter,withRouter } from 'react-router-dom';

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
