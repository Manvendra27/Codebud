import React, { Component } from 'react'
import './Signup.css'
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import * as FcIcons from 'react-icons/fc'
import * as GrIcons from 'react-icons/gr'
import * as RiIcons from 'react-icons/ri'
// import {Link} from 'react-router-dom'

export class Signup extends Component {
    render() {
        return (
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
                      <h2 className="titleHeader" style={{marginTop:'1rem',color:'white'}}>Register Yourself</h2>
                      </div>
                      <div className='row'>
                          <div className='col-sm-12 Pbar' style={{textAlign:'center',marginLeft:'9rem',marginTop:'2rem'}}>
                      <ProgressBar
                        percent={0}
                        width={450}
                        filledBackground="goldenrod">
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <GrIcons.GrDocumentText color={'blue'} size={25}/>
                        )}
                        </Step>
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <RiIcons.RiLockPasswordFill  color={'black'} size={25}/>
                        )}
                        </Step>
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <FcIcons.FcDepartment size={30}/>
                        )}
                        </Step>
                    </ProgressBar>≈
                      {/*  */}
                  </div>
                  </div>
                  <div className='row personalInfo'  style={{marginTop:'5rem',marginLeft:'10rem'}}>
                      <div className='col-sm-12'>
                          <form className='infoForm'>
                          <input name='name' type='text' className='input' placeholder='Name'></input><br/>
                          <input name='email' type='email' className='input' placeholder='Email' style={{marginTop:'3rem'}}></input><br/>
                          <input name='mobile' type='number' className='input' placeholder='Mobile No.' style={{marginTop:'3rem'}}></input><br/>
                          <div className='row'>
                              <div className='col-sm-12' style={{textAlign:'center'}}>
                              <button className='loginBtn'>Next</button>
                              </div>
                          </div>
                            
                            </form>
                      </div>
                  </div>
              </div>
              </div>
              </div>
              </div>
        )
    }
}

export default Signup
