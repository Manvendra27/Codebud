import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export class login extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-12 col-lg-6 left'  >
                  {/* <img className='wave' src='test.jpg' width='700px' alt='wave' /> */}
                  <img className='bg' src='4457.jpg' alt='wave' />
              </div>
              <div className='col-sm-12 col-lg-6 right'>
              <div className='row '>
                  <div className='col-sm-12 title' style={{textAlign:'center',marginTop:'6rem'}}>
                      <img className='avatar' src='logo.PNG' alt='logo' />
                      <h2 className="titleHeader" style={{marginTop:'1rem',color:'white'}}>Login In Your Account</h2>
                      </div>
                      
                  <div className='row loginInfo'  style={{marginTop:'5rem',marginLeft:'10rem'}}>
                      <div className='col-sm-12'>
                          <form className='infoForm'>
                          <input name='email' type='password' className='input' placeholder='Email'></input><br/>
                          <input name='password' type='password' className='input' placeholder='Password' style={{marginTop:'3rem'}}></input><br/>
                          
                          <div className='row'>
                              <div className='col-sm-12' style={{textAlign:'center'}}>
                             <Link to='/'><button className='passBtn'>Next</button></Link>
                              </div>
                          </div>
                            
                            </form>
                      </div>
                  </div>
              </div>
              </div>
              </div>
              </div>
            </div>
        )
    }
}

export default login
