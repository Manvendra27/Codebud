import React, { Component } from 'react'
import './Skills.css'

export class Skills extends Component {
    render() {
        return (
            <div className='container skills'>
                <div className='row'>
                    <div className='col-12'>
                        <button className='Skill-btn'>Front-end Development</button>
                        <button className='Skill-btn'>Back-end Development</button>
                        <button className='Skill-btn'>UX-UI Development</button>
                        <button className='Skill-btn'>Full Stack Development</button> 
                        <button className='Skill-btn'>Machine Learning Dev.</button> 
                        <button className='Skill-btn'>Robotics </button> 
                        <button className='Skill-btn'>IOT Enginner</button> 
                        <button className='Skill-btn'>Cloud Computing enthusiast</button> 
                        <button className='Skill-btn'>Mechaical Engineer</button> 
                        <button className='Skill-btn'>Flight systems</button> 
                        <button className='Skill-btn'>App Development</button> 
                        <button className='Skill-btn'>Graphic Designer</button> 
                        <button className='Skill-btn'>Video Editor</button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
