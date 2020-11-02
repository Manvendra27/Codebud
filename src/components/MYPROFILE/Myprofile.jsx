import React, { Component } from 'react'
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import './Myprofile.css'
export class Myprofile extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-3'>
                        <img className='ProfileImg' height='128px' width='128px' src='ProfilePic.png' alt='Profile Picture'></img>
                    </div>
                    <div className='col-sm-12 col-lg-1 vl'></div>
                    <div className='col-sm-12 col-lg-8'>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-6'>
                                <h1 className='Name'>Manvendra Singh</h1><br/>
                                <label>Email </label>
                                <h5>manven2712@gmail.com</h5><br/>
                                <label>Department</label>
                                <h5>CSE</h5><br/>
                                <label>Role</label>
                                <h5>Student</h5><br/>
                                
                            </div>
                            <div className='col-sm-12 col-lg-6 '>
                                <div className='Social-links'>
                                <button className='InstaBtn'><GrIcons.GrInstagram/><span style={{marginLeft:'.5rem'}}>InstaGram</span></button>
                                <button className='GitBtn'><GrIcons.GrGithub/><span style={{marginLeft:'.5rem'}}>Github</span></button>
                                <button className='WABtn'><FaIcons.FaWhatsapp/><span style={{marginLeft:'.5rem'}}>Whatsapp</span></button >
                                <button className='GmailBtn'><MdIcons.MdEmail/><span style={{marginLeft:'.5rem'}}>Gmail</span></button>
                            </div>
                            </div>
                        </div>
                        <div className='row'>
                                    <div className='col-sm-12'>
                                      <hr/>  
                                    </div>
                                </div>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h2>Domain :</h2><br/>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <label>Major<span style={{color:'blue'}}>*</span></label>
                                        <h4>Web Development</h4>
                                    </div>
                                    <div className='col-sm-6'>
                                        <label>Minor</label>
                                        <h4>App development</h4>
                                    </div>
                                </div><br/><br/>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <h3>Languages/Frameworks I know:</h3><br/>
                                        <ul>
                                            <li>C Language</li>
                                            <li>C++ Language</li>
                                            <li>Python</li>
                                        </ul>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                        <ul>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>MongoDB</li>
                                        </ul>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <h3> Projects :</h3>
                                        <br/>
                                        <h5>&#8226; Project Title</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        <br/>
                                        <h5>&#8226; Project Title</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        <br/>
                                        <h5>&#8226; Project Title</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        <br/>
                                        <hr/>
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

export default Myprofile
